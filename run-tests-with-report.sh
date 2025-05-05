#!/bin/bash

# Clean allure results directory
npm run pretest

# Run the tests
npm test

# Wait for a moment to ensure all files are written
sleep 2

# Generate and open the report
npm run report
