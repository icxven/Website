import os
import json
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("-d", "--dir", type=str, required=True)
parser.add_argument("-s", "--save", type=str, required=True)
parser.add_argument("-n", "--name", type=str, required=True)
args = parser.parse_args()

indexURL = "https://icdn.nethsara.cyou/"


def listFiles(directory):
    fileList = []
    for root, dirs, files in os.walk(directory):
        for filename in files:
            filePath = indexURL + root.split("/")[-1] + "/" + filename
            fileList.append(filePath)
    return fileList


if args.dir:
    fileList = listFiles(args.dir)
    jsonData = json.dumps(fileList, indent=4)
    fileName = args.save + args.name + ".json"
    with open(fileName, "w") as jsonFile:
        jsonFile.write(jsonData)
    print(f"File List Saved at '{fileName}'")
