# Provision CloudFormation Stack with Lambda 
```
aws cloudformation create-stack \
    --stack-name 'test-lambda-stack' \
    --capabilities CAPABILITY_IAM \
    --template-body file://$(pwd)/lambda.yaml \
    --no-cli-pager
aws cloudformation wait \
    stack-create-complete \
    --stack-name 'test-lambda-stack' \
    --no-cli-pager
```

# Invoke Lambda

```
FUNCTION_NAME=$(aws cloudformation describe-stacks \
  --stack-name 'test-lambda-stack' \
  --query "Stacks[0].Outputs[?OutputKey=='LambdaFunctionName'].OutputValue" \
  --output text)
aws lambda invoke \
  --function-name $FUNCTION_NAME \
  outfile.txt
```

# Update CloudFormation Stack with Lambda
```
aws cloudformation update-stack \
    --stack-name 'test-lambda-stack' \
    --capabilities CAPABILITY_IAM \
    --template-body file://$(pwd)/lambda.yaml \
    --no-cli-pager
aws cloudformation wait \
    stack-create-complete \
    --stack-name 'test-lambda-stack' \
    --no-cli-pager
```

# Delete stack

```
aws cloudformation delete-stack \
    --stack-name 'test-lambda-stack'
```