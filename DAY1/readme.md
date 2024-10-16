


# 💡 How I Made Math More Powerful: Deploying a Serverless Power Calculator with AWS

## 📚 Overview
This project focuses on building a **serverless power calculator** using AWS services such as **Lambda**, **API Gateway**, and **DynamoDB**. The goal is to efficiently compute powers of numbers (base^exponent) using the power of cloud technology, ensuring scalability and minimal infrastructure overhead.

---

## 🚀 Why Serverless?
- **Effortless scaling**: AWS automatically handles scaling, allowing the application to adjust to varying workloads.
- **No server management**: By using serverless services, there’s no need to provision or maintain servers.
- **Cost-effective**: Pay only for the resources consumed during computation.

---

## 🛠️ Services and Tools
- **AWS Lambda**: To run the backend logic, responding to HTTP requests for power calculations.
- **API Gateway**: To handle and route incoming HTTP requests to Lambda.
- **DynamoDB**: (Future Enhancement) Used to store the calculation results along with timestamps.
- **AWS IAM**: Ensures secure and restricted access to AWS services.
- **AWS Amplify**: Simplifies deployment of the frontend for interacting with the API.

---

## 🧑‍💻 Step-by-Step Guide

### 1. 🔐 **Configuring IAM Roles**
To securely manage access, an IAM role was set up with permissions to allow Lambda to interact with DynamoDB. The following policy was applied:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "dynamodb:PutItem",
        "dynamodb:GetItem",
        "dynamodb:UpdateItem"
      ],
      "Resource": "arn:aws:dynamodb:us-east-1:123456789012:table/PowerOfMath"
    }
  ]
}
```

2. 🗄️ Creating the DynamoDB Table
A DynamoDB table named PowerOfMathDatabase was set up with an ID as the primary key. This will store each power calculation result along with the timestamp.

3. 📊 Deploying the Lambda Function
The Lambda function was written in Python to handle power calculations. It receives two numbers via API Gateway, computes the result, and stores it in DynamoDB:

```
import json
import math
import boto3
from time import gmtime, strftime

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('PowerOfMathDatabase')
now = strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())

def lambda_handler(event, context):
    base = int(event['base'])
    exponent = int(event['exponent'])
    result = math.pow(base, exponent)
    response = table.put_item(
        Item={
            'ID': str(result),
            'LatestGreetingTime': now
        })
    return {
        'statusCode': 200,
        'body': json.dumps(f'Your result is {result}')
    }
```
4. 🌐 Setting Up API Gateway
To allow public access, API Gateway was configured with:

Method: POST
CORS Enabled: This allows communication between the frontend and backend across different origins.
5. 💻 Frontend Development with AWS Amplify
The frontend interface allows users to input a base and an exponent to receive the calculated result. The UI is powered by HTML, CSS, and JavaScript, and deployed with AWS Amplify.
```
<!DOCTYPE html>
<html>
<head>
    <title>Power of Math</title>
    <style>
        /* CSS styling here */
    </style>
    <script>
        function callAPI(base, exponent) {
            let requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ base: base, exponent: exponent }),
            };
            fetch('YOUR_API_GATEWAY_ENDPOINT', requestOptions)
                .then(response => response.json())
                .then(result => alert(result.body))
                .catch(error => console.error('Error:', error));
        }
    </script>
</head>
<body>
    <h1>To the Power of Math!</h1>
    <form>
        <label>Base:</label>
        <input type="number" id="base">
        <label>Exponent:</label>
        <input type="number" id="exponent">
        <button type="button" onclick="callAPI(document.getElementById('base').value, document.getElementById('exponent').value)">
            Calculate
        </button>
    </form>
</body>
</html>
```
⚠️ Challenges Faced and Lessons Learned
Managing CORS: Configuring CORS properly in API Gateway was key to ensuring the frontend could communicate with the backend without cross-origin issues.
IAM Role Configuration: Striking the right balance between security and functionality in IAM policies was essential to avoid "Access Denied" errors while ensuring secure access to DynamoDB.
Handling Cold Starts in Lambda: Lambda cold starts initially caused delays, but optimizing the function's memory and execution environment reduced latency.
🔗 Conclusion
This serverless power calculator leverages the strengths of AWS services to deliver a scalable, efficient solution for mathematical computations. Through this project, I gained valuable experience in cloud security, API management, and serverless architecture.

📅 Next Steps
Enhancing the Frontend: Improve user interaction and feedback with a more robust UI.
Logging Calculations in DynamoDB: Implement the storage of all calculations in DynamoDB for future analysis.
Error Handling: Implement more detailed error handling, especially for edge cases like large exponents.
