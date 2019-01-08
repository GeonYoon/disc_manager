## create stats

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy import stats
import json

data = pd.read_csv("raw.csv")
data_male = data.loc[data["sex"]==1,:]
data_female = data.loc[data["sex"]==2,:]

M_w = []
M_w.append(np.mean(data_male.bmi))
M_w.append(np.std(data_male.bmi))
M_w.append(np.mean(data_male.fat))
M_w.append(np.std(data_male.fat))
M_w.append(np.mean(data_male.mus))
M_w.append(np.std(data_male.mus))

F_w = []
F_w.append(np.mean(data_female.bmi))
F_w.append(np.std(data_female.bmi))
F_w.append(np.mean(data_female.fat))
F_w.append(np.std(data_female.fat))
F_w.append(np.mean(data_female.mus))
F_w.append(np.std(data_female.mus))

ws = {"M":M_w, "F":F_w}

with open('data.json', 'w') as outfile:
    json.dump(ws, outfile)
