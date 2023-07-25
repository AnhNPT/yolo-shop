// import Applitools Eyes
import { Eyes, BatchInfo } from "@applitools/eyes-playwright";

// Initialize Eyes with API Key
const eyes = new Eyes();
eyes.setApiKey("V3fx2S9104P6hdQxBOB5d4hFDQ1yQChidD825anayv8108A110");

// Set batch information (optional but recommended)
const batchInfo = new BatchInfo("Test 1");
eyes.setBatch(batchInfo);
