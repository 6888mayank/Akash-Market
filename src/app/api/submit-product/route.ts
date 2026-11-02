import { NextResponse } from "next/server";

export interface ProductSubmissionData {
  contactName: string;
  companyName: string;
  email: string;
  phone: string;
  productName: string;
  industry: string;
  productDescription: string;
  pricingCapacity: string;
  currentChannels: string;
  interest: "B2B" | "B2C" | "Both";
  targetGeography: string;
  desiredBuyerType: string;
  privacyConsent: boolean;
}

export async function POST(request: Request) {
  try {
    const data: Partial<ProductSubmissionData> = await request.json();

    // Validation
    const requiredFields = [
      "contactName",
      "companyName",
      "email",
      "phone",
      "productName",
      "industry",
      "productDescription",
      "interest",
    ];

    for (const field of requiredFields) {
      if (!data[field as keyof ProductSubmissionData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    // Generate secure reference ID
    const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    const referenceId = `AKASH-${new Date().getFullYear()}-${randomSuffix}`;
    const timestamp = new Date().toISOString();

    const record = {
      referenceId,
      timestamp,
      ...data,
      status: "UNDER_REVIEW",
      assignedDesk: data.interest === "B2B" ? "B2B Industrial & Bulk Division" : "Retail & Distribution Division",
      estimatedReviewTime: "24-48 business hours",
    };

    console.log(`[AKASH API] New Product Partnership Registered: ${referenceId}`, record);

    return NextResponse.json(
      {
        success: true,
        message: "Product submission received successfully. Our sales desk will conduct an initial market feasibility review.",
        data: {
          referenceId,
          timestamp,
          companyName: data.companyName,
          productName: data.productName,
          status: "UNDER_REVIEW",
          estimatedReviewTime: "24-48 business hours",
          reviewOfficer: "Senior Market Expansion Desk",
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[AKASH API Error]", error);
    return NextResponse.json(
      { error: "Internal server error occurred while processing your submission." },
      { status: 500 }
    );
  }
}
