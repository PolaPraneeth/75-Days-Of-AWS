ETL Automation Using AWS Lambda, Glue Crawler, and S3
This project demonstrates an automated ETL (Extract, Transform, Load) pipeline using AWS services. The workflow extracts CSV files from an S3 bucket (inputbucket), processes them using AWS Glue Crawler and Lambda, transforms the data into Avro format, and stores the result in another S3 bucket (outputbucket). IAM roles are utilized to ensure secure and seamless access across services.

Project Overview
Extract: Raw CSV files are placed in inputbucket.
Transform: AWS Glue Crawler processes and catalogs the data.
Load: Data is converted to Avro format and saved in outputbucket.
Architecture
S3 Buckets:
inputbucket - Contains raw CSV files.
outputbucket - Stores processed Avro files.
AWS Glue Crawler: Scans and catalogs the CSV data.
AWS Lambda: Handles ETL workflow including invoking the Glue Crawler and data transformation.
IAM Roles: Secure the interaction between AWS services.
Prerequisites
AWS Account: Access to the AWS Management Console.
S3 Buckets: Create inputbucket and outputbucket.
IAM Roles: Properly configured roles for Lambda and Glue.
Setup
Step 1: Create S3 Buckets
Log into AWS Management Console.
Create inputbucket and outputbucket.
Upload a sample CSV file to inputbucket.
Step 2: Configure IAM Roles
Lambda Execution Role:
Attach AmazonS3FullAccess, AWSGlueServiceRole, and AWSLambdaBasicExecutionRole.
Glue Service Role:
Attach AmazonS3FullAccess and AWSGlueServiceRole.
Step 3: Create Glue Crawler
Go to AWS Glue and create a crawler named csv-to-avro-crawler.
Set the data store to S3 and select inputbucket.
Create a new database (e.g., etl_demo).
Use the IAM role created for Glue.
Step 4: Deploy Lambda Function
Create a new Lambda function in AWS Lambda Console.
Use the provided code (see below).
Assign the Lambda Execution Role.
Adjust memory and timeout settings if needed.
Lambda Function Code
python
Copy code
import boto3
import json
import logging

# Initialize AWS clients
s3_client = boto3.client('s3')
glue_client = boto3.client('glue')

def lambda_handler(event, context):
    try:
        input_bucket = 'inputbucket'
        output_bucket = 'outputbucket'
        input_file = event['Records'][0]['s3']['object']['key']

        # Trigger Glue Crawler
        glue_client.start_crawler(Name='csv-to-avro-crawler')
        
        # Placeholder for transformation logic
        
        # Save to outputbucket
        s3_client.put_object(
            Bucket=outputbucket,
            Key=f"processed/{input_file.replace('.csv', '.avro')}",
            Body=transformed_data
        )
        
        logging.info("ETL Process Completed Successfully")
        return {
            'statusCode': 200,
            'body': json.dumps('ETL Process Completed Successfully!')
        }
    except Exception as e:
        logging.error(f"Error during ETL: {str(e)}")
        return {
            'statusCode': 500,
            'body': json.dumps(f"ETL failed: {str(e)}")
        }
Step 5: Automate with S3 Event Triggers
Set up event notifications on inputbucket to trigger Lambda whenever a new CSV is uploaded.
Testing the Workflow
Upload a sample CSV file to inputbucket.
Check outputbucket to see the processed Avro file.
Monitor logs and errors using AWS CloudWatch.
Challenges Faced & Solutions
IAM Permissions:
Adjusted policies to ensure secure access across services.
File Processing Issues:
Tweaked Lambda settings to accommodate large files.
Monitoring:
Enabled logging in Lambda for easier troubleshooting.
Key Takeaways
Scalability: Serverless architecture offers cost-efficient scaling.
Automation: Event-driven design eliminates manual triggers.
Security: Proper IAM configurations ensure secure service interactions.
Future Enhancements
Implement more data transformations using AWS Glue Jobs.
Add notifications (SNS) to alert when the ETL process completes or fails.
Enable versioning in outputbucket for tracking data changes.
