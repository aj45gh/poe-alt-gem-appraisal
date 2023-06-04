from enum import Enum
from fastapi import FastAPI
from pydantic import BaseModel, Field
from typing import Optional

app = FastAPI()


class GemQualityType(str, Enum):
    superior = "superior"
    anomalous = "anomalous"
    divergent = "divergent"
    phantasmal = "phantasmal"


class CurrencyType(str, Enum):
    chaos = "chaos"
    divine = "divine"


class GemPrice(BaseModel):
    quality_type: GemQualityType = Field(alias="qualityType")
    price_currency: CurrencyType = Field(alias="priceCurrency")
    price_amount: float = Field(alias="priceAmount")

    class Config:
        allow_population_by_field_name = True


class Gem(BaseModel):
    name: str
    quality_types: list[GemPrice] = Field(alias="qualityTypes")

    class Config:
        allow_population_by_field_name = True


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/altGems")
def alt_gem_list() -> list[Gem]:
    return [
        Gem(
            name="absolution",
            quality_types=[
                GemPrice(
                    quality_type=GemQualityType.superior,
                    price_currency=CurrencyType.chaos,
                    price_amount=1,
                ),
                GemPrice(
                    quality_type=GemQualityType.anomalous,
                    price_currency=CurrencyType.chaos,
                    price_amount=6,
                ),
                GemPrice(
                    quality_type=GemQualityType.divergent,
                    price_currency=CurrencyType.chaos,
                    price_amount=5,
                ),
            ],
        ),
        Gem(
            name="arc",
            quality_types=[
                GemPrice(
                    quality_type=GemQualityType.superior,
                    price_currency=CurrencyType.chaos,
                    price_amount=1,
                ),
                GemPrice(
                    quality_type=GemQualityType.anomalous,
                    price_currency=CurrencyType.chaos,
                    price_amount=15,
                ),
                GemPrice(
                    quality_type=GemQualityType.divergent,
                    price_currency=CurrencyType.chaos,
                    price_amount=30,
                ),
                GemPrice(
                    quality_type=GemQualityType.phantasmal,
                    price_currency=CurrencyType.chaos,
                    price_amount=20,
                ),
            ],
        ),
    ]
