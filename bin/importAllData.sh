#! /bin/bash

node parserStudy.js ../data/bacterialStudy.csv
node parserStudy.js ../data/fungalStudy.csv
node bacterialParcerSampleMetadata.js International ../data/bacterialSampleMetadata.csv
node fungalParcerSampleMetadata.js UIUC ../data/fungalSampleMetadata.csv
node parserSpecies.js ../data/Bacterial_otu_table_2010.csv
node parserSpecies.js ../data/Fungal_otu_table_2010.csv


