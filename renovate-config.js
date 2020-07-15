module.exports =   
{
  // Set to false even though this is default to guard against future defaults
  "automerge": false,

  // set-build-properties fails if "renovate/" is used
  "branchPrefix": "renovate-",
  "extends": [
    "config:base"
  ],
  // Renovate will be timing out against our nexus server anyway, so no need to look it up
  "hostRules": [
    {
      "hostName": "https://nexus.tffauto.no/repository/maven-releases/",
      "enabled": false
    },
    {
      "hostName": "https://nexus.tffauto.no/repository/maven-snapshots/",
      "enabled": false
    }
  ],
  // Ensure that major is never automerged
  "major": {
    "automerge": false
  },
  "masterIssue": true,
  "packageRules": [
    {
      // We need to update tffauto-common manually as Renovate doesn't have access to nexus
      "packageNames": ["tffauto-common"],
      "enabled": false
    },
    {
      // We don't need to update npm packages in this repo as they are just for dev purposes
      "datasources": ["npm"],
      "enabled": false
    }
  ],
  // Default 0, but use this to prevent renovate from spamming PRs
  "prConcurrentLimit": 5,
  // Wait for builds to complete (successful or otherwise) before creating PRs
  "prCreation": "not-pending",
  // Ensure that we have a list of PRs ready on Monday
  "schedule": [
    "every weekend", "after 5pm on Friday"
  ],
  "stabilityDays": 10,
  "timezone": "Europe/Oslo"
}
