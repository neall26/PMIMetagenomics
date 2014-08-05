#! /bin/bash

mongo --eval "db.speciescharacteristics.drop()"
mongo --eval "db.samplemetadatas.drop()"
mongo --eval "db.studymetadatas.drop()"


node parserStudy.js ../data/bacterialStudy.csv
#!node parserStudy.js ../data/fungalStudy.csv
node bacterialParcerSampleMetadata.js PRM ../data/bacterialSampleMetadata.csv
node fungalParcerSampleMetadata.js PRM ../data/fungalSampleMetadata.csv
node parserSpecies.js ../data/Bacterial_otu_table_2010.csv
node parserSpecies.js ../data/Fungal_otu_table_2010.csv


