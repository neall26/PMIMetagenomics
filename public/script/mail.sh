#!/bin/bash

emails=koragh@ornl.gov
subject="PMI Automated Email: New Document Uploaded ($1)"
body="Everybody, \n\nThis is an automated email send from PMI bot. Please do not respond to this email.\n\nA new document has been upload to the PMI knowledgebase, its available for review. It attached to this email for your review. Please let Guruprasad Kora (koragh@ornl.gov) know once the document is reviewed.\n\n  -- PMI bot."

`mutt -a $1 -s $subject $emails < $body`

 