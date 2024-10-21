# 📊 Amazon Athena: Serverless Data Analytics

Amazon Athena is a powerful, serverless query service that enables you to analyze data stored in Amazon S3 using standard SQL. This tool allows for easy, scalable, and cost-effective data analytics without the need for complex infrastructure management. Athena is designed to handle structured, semi-structured, and unstructured data efficiently.

---

## 🌟 What is Amazon Athena?

Amazon Athena is an interactive query service that lets you use SQL to analyze data directly from Amazon S3. It is based on **Presto**, a distributed SQL engine, and integrates seamlessly with other AWS services like Glue, QuickSight, and CloudWatch.

### **Key Features**
- **Serverless**: No infrastructure to manage, just run queries and pay for what you use.
- **Standard SQL**: Write queries using standard SQL syntax.
- **Supports Multiple Data Formats**: Query data in **CSV, JSON, Parquet, ORC, Avro**, and more.
- **Fast & Scalable**: Handles large datasets efficiently, capable of processing petabytes of data.

---

## 💰 Pricing

- **$5 per TB scanned**: Charges are based on the amount of data scanned by your queries.
- **Data Compression & Partitioning**: Use compression and efficient file formats (like Parquet or ORC) to reduce costs by scanning less data.
- **AWS Glue Data Catalog**: First million objects and requests per month are free; thereafter, it's **$1 per 100,000 objects** and **$1 per million requests**.

---

## 🏗️ How Amazon Athena Works

- **Data Storage**: Store your data in Amazon S3, using supported formats like CSV, Parquet, JSON, or ORC.
- **Data Cataloging**: Use AWS Glue to define schemas and tables, making your data accessible for SQL querying.
- **Query Execution**: Write SQL queries directly in the Athena console, and get results in seconds.

**Example SQL Query:**
```sql
SELECT video_id, title, views
FROM youtube_videos
WHERE category = 'Technology'
ORDER BY views DESC
LIMIT 10;
```
