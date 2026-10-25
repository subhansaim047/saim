import json
import csv
import os
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

print("Initializing Master SEO Suite Data Generator...")

BASE_URL = "https://www.saimdev.site"

# Define 5 Clusters with exact 60 keywords each (Total 300)
# We will construct a rich function that populates each item with all 17 required attributes.
