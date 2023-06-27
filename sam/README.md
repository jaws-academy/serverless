# SAM

## Create SAM Project

```
sam init

You can preselect a particular runtime or package type when using the `sam init` experience.
Call `sam init --help` to learn more.

Which template source would you like to use?
	1 - AWS Quick Start Templates
	2 - Custom Template Location
Choice: 1

Choose an AWS Quick Start application template
	1 - Hello World Example
	2 - Multi-step workflow
	3 - Serverless API
	4 - Scheduled task
	5 - Standalone function
	6 - Data processing
	7 - Infrastructure event management
	8 - Serverless Connector Hello World Example
	9 - Multi-step workflow with Connectors
	10 - Lambda EFS example
	11 - Machine Learning
Template: 1

Use the most popular runtime and package type? (Python and zip) [y/N]: N

Which runtime would you like to use?
	1 - dotnet6
	2 - dotnet5.0
	3 - dotnetcore3.1
	4 - go1.x
	5 - graalvm.java11 (provided.al2)
	6 - graalvm.java17 (provided.al2)
	7 - java11
	8 - java8.al2
	9 - java8
	10 - nodejs16.x
	11 - nodejs14.x
	12 - nodejs12.x
	13 - python3.9
	14 - python3.8
	15 - python3.7
	16 - ruby2.7
	17 - rust (provided.al2)
Runtime: 7

What package type would you like to use?
	1 - Zip
	2 - Image
Package type: 1

Which dependency manager would you like to use?
	1 - gradle
	2 - maven
Dependency manager: 2

Would you like to enable X-Ray tracing on the function(s) in your application?  [y/N]: N

Project name [sam-app]: sam-test

Cloning from https://github.com/aws/aws-sam-cli-app-templates (process may take a moment)

    -----------------------
    Generating application:
    -----------------------
    Name: sam-test
    Runtime: java11
    Architectures: x86_64
    Dependency Manager: maven
    Application Template: hello-world
    Output Directory: .

    Next steps can be found in the README file at ./sam-test/README.md


    Commands you can use next
    =========================
    [*] Create pipeline: cd sam-test && sam pipeline init --bootstrap
    [*] Validate SAM template: cd sam-test && sam validate
    [*] Test Function in the Cloud: cd sam-test && sam sync --stack-name {stack-name} --watch


SAM CLI update available (1.89.0); (1.61.0 installed)
To download: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html
```

## Building the project
```
sam build
```

## Deploying the project

```
sam deploy --resolve-s3 --stack-name sam-test --capabilities CAPABILITY_IAM --no-fail-on-empty-changeset --region eu-central-1
```