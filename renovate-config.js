module.exports =   
{
  // Set to false even though this is default to guard against future defaults
  "automerge": false,

  // set-build-properties fails if "renovate/" is used
  "branchPrefix": "renovate-",
  "extends": [
    "config:base"
  ],
  // Ensure that major is never automerged
  "major": {
    "automerge": false
  },
  "masterIssue": true,
  // Default 0, but use this to prevent renovate from spamming PRs
  "prConcurrentLimit": 5,
  // Wait for builds to complete (successful or otherwise) before creating PRs
  "prCreation": "not-pending",
  "stabilityDays": 10,
  "timezone": "Europe/Oslo"
}
