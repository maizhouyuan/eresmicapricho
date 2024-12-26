from flask import Flask, jsonify, request
from flask_cors import CORS
import boto3
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)

# S3 配置
s3 = boto3.client('s3',
    aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
    aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY')
)
BUCKET_NAME = 'myblogdb'

@app.route('/api/posts', methods=['GET'])
def get_posts():
    try:
        # 从 S3 获取文章列表
        response = s3.list_objects_v2(Bucket=BUCKET_NAME)
        posts = []
        if 'Contents' in response:
            for item in response['Contents']:
                obj = s3.get_object(Bucket=BUCKET_NAME, Key=item['Key'])
                posts.append({
                    'key': item['Key'],
                    'content': obj['Body'].read().decode('utf-8')
                })
        return jsonify({'posts': posts})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/posts', methods=['POST'])
def create_post():
    try:
        data = request.json
        if not data or 'content' not in data:
            return jsonify({'error': 'No content provided'}), 400

        # 生成唯一的文件名
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        file_name = f"post_{timestamp}.txt"

        # 上传到 S3
        s3.put_object(
            Bucket=BUCKET_NAME,
            Key=file_name,
            Body=data['content'],
            ContentType='text/plain'
        )

        return jsonify({
            'message': 'Post created successfully',
            'file_name': file_name
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
