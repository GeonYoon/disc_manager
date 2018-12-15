## scoring
import sys
import json

## load Model data
with open('Scoring/data.json', 'r') as file:
    data = json.load(file)
M_w = data["M"]
F_w = data["F"]

def Scoring(inp): ## ex inp = ["M", 180, 70, 32, 43] ex sex / ht / wt / fat / mus
    if inp[0] == "M":
        z_bmi = abs(((inp[2]/((inp[1])**2) - M_w[0])/M_w[1])*5)
        z_fat = abs(((inp[3] - M_w[2])/M_w[3])*5)
        z_mus = abs(((inp[4] - M_w[4])/M_w[5])*5)
        return 100 - sum([z_bmi, z_fat, z_mus])
    if inp[0] == "F":
        z_bmi = abs(((inp[2]/((inp[1])**2) - F_w[0])/F_w[1])*5)
        z_fat = abs(((inp[3] - F_w[2])/F_w[3])*5)
        z_mus = abs(((inp[4] - F_w[4])/F_w[5])*5)
        return 100 - sum([z_bmi, z_fat, z_mus])
