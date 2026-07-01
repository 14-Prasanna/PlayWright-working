import fs from "fs";
import path from "path";
import { XMLParser } from "fast-xml-parser";

export interface BillingDetails {
  name: string;
  country: string;
  city: string;
  card: string;
  month: string;
  year: string;
}

export function readXML(fileName: string): BillingDetails {
  const filePath = path.resolve(__dirname, `../test-data/${fileName}`);
  const xmlData = fs.readFileSync(filePath, "utf-8");

  const parser = new XMLParser({
    parseTagValue: false
  });

  const result = parser.parse(xmlData);
  return result.billing.customer as BillingDetails;
}