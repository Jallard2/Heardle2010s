import os

songsList = []

for file in os.listdir("songs"):
    print(file[:-4])
    songsList.append(file)

print(songsList)