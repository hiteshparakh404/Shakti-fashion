import LegalPage from "../../components/legal/LegalPage";

const title = "Terms & Conditions";
const description = "Terms and Conditions for Shiv Shakti Fashion website, products, orders, payments, shipping, returns and contact details.";

export const metadata = {
  title: "Terms & Conditions | Shiv Shakti Fashion",
  description,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms & Conditions | Shiv Shakti Fashion",
    description,
    url: "/terms",
    siteName: "Shiv Shakti Fashion",
    type: "website"
  }
};

const termsContent = {
  title,
  intro: [
    "Welcome to SHIV SHAKTI FASHION. By accessing or using our website, you agree to comply with and be bound by the following Terms & Conditions. If you do not agree with these terms, please do not use our website."
  ],
  sections: [
    {
      heading: "1. General",
      paragraphs: [
        "These Terms & Conditions govern the use of our website and the purchase of products from SHIV SHAKTI FASHION.",
        "We reserve the right to update or modify these terms at any time without prior notice."
      ]
    },
    {
      heading: "2. Products",
      paragraphs: ["We offer ready-made garments, footwear, and fashion accessories."],
      list: [
        "Product images are for illustration purposes. Actual product colors and designs may vary slightly due to lighting, photography, or screen settings.",
        "Product availability is subject to stock."
      ]
    },
    {
      heading: "3. Pricing",
      list: [
        "All prices are listed in Indian Rupees (INR).",
        "Prices are subject to change without prior notice.",
        "Applicable taxes and shipping charges will be displayed during checkout, where applicable."
      ]
    },
    {
      heading: "4. Orders",
      list: [
        "Orders are confirmed only after successful payment or confirmation, as applicable.",
        "We reserve the right to refuse or cancel any order due to pricing errors, stock unavailability, suspected fraud, or any other valid reason.",
        "If an order is cancelled after payment, the eligible refund will be processed according to our Refund Policy."
      ]
    },
    {
      heading: "5. Payment",
      list: [
        "We accept payment through the payment methods displayed on our website.",
        "All online payments are processed through secure payment gateways."
      ]
    },
    {
      heading: "6. Shipping & Delivery",
      paragraphs: [
        "Delivery timelines are estimates and may vary depending on location, courier service, weather conditions, or other unforeseen circumstances.",
        "We are not responsible for delays caused by third-party courier partners."
      ]
    },
    {
      heading: "7. Returns & Exchanges",
      list: [
        "Returns or exchanges are accepted only as per our Return & Exchange Policy.",
        "Products must be unused, unworn, with original tags, packaging, and invoice.",
        "Items damaged due to misuse, improper handling, or normal wear and tear are not eligible for return or exchange."
      ]
    },
    {
      heading: "8. Cancellation",
      list: [
        "Orders can be cancelled before dispatch.",
        "Once dispatched, cancellation requests may not be accepted."
      ]
    },
    {
      heading: "9. Intellectual Property",
      paragraphs: [
        "All content on this website, including logos, images, text, graphics, and designs, is the property of SHIV SHAKTI FASHION and may not be copied, reproduced, or used without prior written permission."
      ]
    },
    {
      heading: "10. User Responsibilities",
      paragraphs: ["You agree not to:"],
      list: [
        "Provide false or misleading information.",
        "Use the website for unlawful activities.",
        "Attempt to disrupt or interfere with the website's operation or security."
      ]
    },
    {
      heading: "11. Limitation of Liability",
      paragraphs: [
        "SHIV SHAKTI FASHION shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or products, except as required by applicable law."
      ]
    },
    {
      heading: "12. Privacy",
      paragraphs: ["Your use of this website is also governed by our Privacy Policy."]
    },
    {
      heading: "13. Governing Law",
      paragraphs: [
        "These Terms & Conditions shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in the city where SHIV SHAKTI FASHION operates."
      ]
    },
    {
      heading: "14. Contact Us",
      paragraphs: ["If you have any questions regarding these Terms & Conditions, please contact us:"],
      table: [
        ["Business", "SHIV SHAKTI FASHION"],
        ["Email", "shivshaktifashion3@gmail.com"],
        ["Phone", "+91 98245 70190"],
        ["Address", "Plot No. 6, Near Nijdham Ashram, Ram Nagar, Rander Road, Surat."]
      ]
    }
  ]
};

export default function TermsPage() {
  return <LegalPage {...termsContent} />;
}

