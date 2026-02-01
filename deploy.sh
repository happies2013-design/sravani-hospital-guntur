#!/bin/bash

# Sravani Hospital - Vercel Deployment Script
# Location: Guntur, Andhra Pradesh

echo "🏥 Sravani Multi-Specialty Hospital - Deployment Script"
echo "📍 Location: Guntur, Andhra Pradesh"
echo "=================================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Check if Vercel CLI is installed
echo "📦 Checking Vercel CLI..."
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}Vercel CLI not found. Installing...${NC}"
    npm install -g vercel
else
    echo -e "${GREEN}✓ Vercel CLI found${NC}"
fi

# Step 2: Clean build
echo ""
echo "🧹 Cleaning previous build..."
rm -rf dist

# Step 3: Build project
echo ""
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Build successful${NC}"
else
    echo -e "${RED}✗ Build failed. Please fix errors and try again.${NC}"
    exit 1
fi

# Step 4: Deploy to Vercel
echo ""
echo "🚀 Deploying to Vercel..."
echo ""
read -p "Deploy to production? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Deploying to production..."
    vercel --prod
else
    echo "Creating preview deployment..."
    vercel
fi

echo ""
echo -e "${GREEN}=================================================="
echo "✓ Deployment Complete!"
echo "=================================================="
echo ""
echo "🏥 Sravani Multi-Specialty Hospital"
echo "📍 Old Bank Road, Kotthapet, Guntur 522001"
echo "📞 Phone: 0863-2233644"
echo "🚨 Emergency: 0863-2352354"
echo ""
echo "Visit your deployment at the URL shown above!"
echo -e "${NC}"
