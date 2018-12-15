## scoring
import sys
import json

## load Model data
with open('/Users/geonyoon/Desktop/medical_hackathon/backend/Scoring/data.json', 'r') as file:
    data = json.load(file)
M_w = data["M"]
F_w = data["F"]

def Scoring(input): ## ex input = ["M", 180, 70, 32, 43] ex sex / ht / wt / fat / mus
    if input[0] == "M":
        z_bmi = abs(((input[2]/((input[1])**2) - M_w[0])/M_w[1])*5)
        z_fat = abs(((input[3] - M_w[2])/M_w[3])*5)
        z_mus = abs(((input[4] - M_w[4])/M_w[5])*5)
        return 100 - sum([z_bmi, z_fat, z_mus])
    if input[0] == "F":
        z_bmi = abs(((input[2]/((input[1])**2) - F_w[0])/F_w[1])*5)
        z_fat = abs(((input[3] - F_w[2])/F_w[3])*5)
        z_mus = abs(((input[4] - F_w[4])/F_w[5])*5)
        return 100 - sum([z_bmi, z_fat, z_mus])


