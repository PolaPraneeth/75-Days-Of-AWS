# Day 1: Setup and Initial Lambda Function

## Objective
The goal for Day 1 was to establish the foundational elements of a serverless power calculator using AWS. This involved setting up the necessary AWS services, including Lambda and API Gateway, to compute the power of a number (base^exponent).

## Technologies Used
- AWS Lambda
- AWS API Gateway
- Python programming language
- AWS CLI

## Tasks Completed

### AWS Lambda Setup
- **Lambda Function Creation**: Developed an initial Lambda function to handle power calculations.
- **Local Testing**: Implemented basic tests to ensure the Lambda function correctly calculates the power of given numbers.

### API Gateway Configuration
- **Endpoint Setup**: Configured the initial API endpoint to trigger the Lambda function.
- **CORS Configuration**: Enabled CORS to allow web applications from different origins to use the service.

## Code Snippets

Here are some important snippets from today's work:

```python
# Lambda function to calculate power
import math

def lambda_handler(event, context):
    base = int(event['queryStringParameters']['base'])
    exponent = int(event['queryStringParameters']['exponent'])
    result = math.pow(base, exponent)
    return {
        'statusCode': 200,
        'body': str(result)
    }
