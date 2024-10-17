# Praneeth Kumar's Resume Website

This repository contains the code for my personal resume website hosted on AWS. The site is built using static HTML, CSS, and JavaScript files and is served using Amazon S3 with CloudFront as the CDN for fast global delivery. The website is secured using SSL/TLS certificates provided by AWS Certificate Manager (ACM), and Route 53 is used for DNS management with a custom domain.

## Architecture Overview

- **Amazon S3**: Hosts the static files (HTML, CSS, JS).
- **CloudFront**: Serves content globally as a CDN, ensuring fast load times.
- **ACM (AWS Certificate Manager)**: Provides a free SSL/TLS certificate for HTTPS.
- **Route 53**: Manages the custom domain (`praneethkumar-resume.com`) and routes traffic to CloudFront.

## Features

- **Custom Domain**: Hosted at `praneethkumar-resume.com`
- **Global Content Delivery**: Using CloudFront CDN for fast and reliable content delivery.
- **SSL/TLS Secured**: HTTPS is enabled with a free certificate from AWS ACM.
- **Scalable and Cost-Efficient**: Utilizes AWS infrastructure for cost-effective scalability.

## Project Structure

├── index.html # Main HTML file (your resume) ├── style.css # CSS styling for the website ├── scripts.js # (Optional) JavaScript file for any interactions 

## Setup Instructions

Follow these steps to set up the project on your AWS account:

### 1. **Register a Custom Domain**
- Go to the AWS Route 53 console.
- Register your custom domain (e.g., `praneethkumar-resume.com`).
- AWS will handle the domain registration process.

### 2. **Create an S3 Bucket**
- Go to the S3 console and create a bucket named after your domain (e.g., `praneethkumar-resume.com`).
- Enable static website hosting on the bucket.
- Upload your `index.html`, `style.css`, and any other files.
- Set the bucket policy to allow public read access.

### 3. **Configure CloudFront**
- Go to the CloudFront console and create a new distribution.
- Set the S3 bucket as the origin.
- Configure the distribution to use HTTPS by associating it with an SSL certificate from AWS Certificate Manager (ACM).

### 4. **Obtain an SSL Certificate via ACM**
- Go to AWS Certificate Manager (ACM).
- Request a certificate for your custom domain.
- Use DNS validation to verify domain ownership through Route 53.

### 5. **Set Up Route 53 for DNS**
- In Route 53, create an A record with an alias pointing to your CloudFront distribution.
- This ensures that your custom domain will resolve to your CloudFront distribution.

### 6. **Deploy**
- After the CloudFront distribution is deployed and Route 53 is set up, your website will be live at your custom domain (e.g., `praneethkumar-resume.com`).

## Cost Breakdown

- **S3**: Cost-effective storage for small static files (usually just a few cents per month).
- **CloudFront**: Charges for data transfer and requests (depends on traffic).
- **Route 53**: Domain registration costs around $12/year.
- **ACM**: Free SSL/TLS certificates when used with AWS services like CloudFront.

## Credits

This project was inspired by a tutorial from **Tiny Tech Tutorials**, whose step-by-step guide on building a resume website using AWS services provided the foundation for this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

