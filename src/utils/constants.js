export const ImgLink = {
  appleStore:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAiCAYAAACUcR1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAtLSURBVHgB7Zt1jFTXF8cPUi8tdW+hqbe03Tquf+CuQYMECBqCSyCQQCCEQNBA0ASH4BDc3d3d3V3u73wOffN7M7sLM7MDge1+kxt23rvv3vvOPffI9zxE/o/02tprW6jNpbTnsm3UVk0SQAZtB5+xxaa06NvBf/dUUslDBC6kINngkLa4NPLwSFeTFCQ34HJvp37llVcayRPA66+/LmXLlpX69etLtPjwww/lgw8+kLRp00qs8c8//8j7778v0SB9+vSSK1cuiTV++ukn+eOPPySGyClffPFFzH3A559/7pYtW+auX7/uJk2aFNUYpUuXduvWrXN9+/Z1S5YscaooMV1j//79bY5onv3111+jfq/QFhcX595++237u0WLFq5Dhw4xGZf23nvvuZgfjddee02mTp0qv/zyi/2eNWuWRAMswNatW6VevXqiC5V58+bJtm3bRDdbvv76a8mcObOcOXPGrr/55puSMWNGWbt2rfz2229y8uRJuXXrlnzzzTeyatUqO20PHjwQVTyZNm2aXL58WVKlSiWpU6e2uXg2Z86ccvHiRZkxY4bcu3dPMmXKJLqRcuTIEVm8eLH1++yzzyRPnjzinEtwzV9++aXkyJEjaJwsWbKIKrrJY/78+XL8+PFAfyxUnz59ZMyYMTJ+/Hi7hnWoVKmSHD58WJYuXWrXvv/+e/nzzz9l586d9o6RILXEGLVr1w5sLguaMmWKJBVnz56VlStXSvbs2eW7774zody5c0caNmwoVapUkXTp0kmbNm3krbfekt69e0uxYsXMBJcrV86eHzp0qPz+++9SpEgRe8aPV199VUaNGiUvvPCCVK5cWRo0aGAu4dtvv5UbN25It27dTLgo2cyZM03xChYsKOra4o0zcuTIeOP07NnT5mQ9AwYMiPduL774oimoB5SRuXr16iWffvqpuaju3bvbWlq3bm0KHAlivsGlSpWyfw8cOGCbffr0aYkFOG137941P3XhwgXbFF68TJkypu1seLZs2eT8+fN2+jhJWBJw9epVGTFihAwfPjyegH744Qc5d+6cDBo0SLp27SqFChUyK8QJL1y4sG3o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",
  androidStore:
    "data:image/png;base64,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",
};