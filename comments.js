// Create web server
const express = require("express");
const app = express();
const port = 3000;

// Create client for Github API
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

// Create client for Azure Text Analytics API
const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");
const client = new TextAnalyticsClient(
  "https://github-comments.cognitiveservices.azure.com/",
  new AzureKeyCredential(process.env.AZURE_TEXT_ANALYTICS_KEY)
);

// Create client for Azure Blob Storage
const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");
const sharedKeyCredential = new StorageSharedKeyCredential(
  "githubcomments",
  process.env.AZURE_STORAGE_KEY
);
const blobServiceClient = new BlobServiceClient(
  "https://githubcomments.blob.core.windows.net",
  sharedKeyCredential
);

// Create client for Azure Cognitive Search
const { SearchClient, SearchIndexClient, AzureKeyCredential } = require("@azure/search-documents");
const indexClient = new SearchIndexClient(
  "https://githubcomments.search.windows.net",
  new AzureKeyCredential(process.env.AZURE_SEARCH_KEY)
);

// Create client for Azure DevOps API
const axios = require("axios");
const devopsClient = axios.create({
  baseURL: "https://dev.azure.com/msazure",
  headers: {
    Authorization: `Basic ${process.env.AZURE_DEVOPS_PAT}`,
  },
});

// Create client for Azure DevOps Work Item Tracking API
const witClient = axios.create({
  baseURL: "https://dev.azure.com/msazure",
  headers: {
    Authorization: `Basic ${process.env.AZURE_DEVOPS_PAT}`,
  },
});

// Create client for Azure DevOps Git API
const gitClient = axios.create({
  baseURL: "https://dev.azure.com/MSAzure",
  headers: {
    Authorization: `Basic ${process.env.AZURE_DEVOPS_PAT}`,
  },
});

// Create client for Azure DevOps Build API
const buildClient = axios.create({
  baseURL: "https://dev.azure.com/msazure",
  headers: {
    Authorization: `Basic ${process.env.AZURE_DEVOPS_PAT}`,
  },
});

// Create client for Azure DevOps Release API
const releaseClient = axios.create({