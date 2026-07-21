import LegalPage from "../../components/legal/LegalPage";

const title = "Privacy Policy";
const description = "Privacy Policy for Shiv Shakti Fashion explaining how customer information is collected, used, stored, protected and shared.";

export const metadata = {
  title: "Privacy Policy | Shiv Shakti Fashion",
  description,
  alternates: { canonical: "/policy" },
  openGraph: {
    title: "Privacy Policy | Shiv Shakti Fashion",
    description,
    url: "/policy",
    siteName: "Shiv Shakti Fashion",
    type: "website"
  }
};

const policyContent = {
  title,
  intro: [
    "At SHIV SHAKTI FASHION (\"we,\" \"our,\" or \"us\"), we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or purchase products from us."
  ],
  sections: [
    {
      heading: "1. Information We Collect",
      paragraphs: ["We may collect the following information:"],
      list: [
        "Full name",
        "Mobile number",
        "Email address",
        "Billing and shipping address",
        "Order and purchase details",
        "Payment information processed securely through third-party payment providers; we do not store your card or banking details.",
        "Device information, IP address, browser type, and website usage data"
      ]
    },
    {
      heading: "2. How We Use Your Information",
      paragraphs: ["We use your information to:"],
      list: [
        "Process and deliver your orders",
        "Provide customer support",
        "Send order confirmations and shipping updates",
        "Respond to your inquiries",
        "Improve our website, products, and services",
        "Send promotional offers and updates only if you have opted in",
        "Prevent fraud and maintain website security",
        "Comply with legal obligations"
      ]
    },
    {
      heading: "3. Cookies",
      paragraphs: [
        "Our website may use cookies and similar technologies to improve your browsing experience, remember your preferences, analyze website traffic, and enhance our services.",
        "You can disable cookies through your browser settings, although some website features may not function properly."
      ]
    },
    {
      heading: "4. Sharing of Information",
      paragraphs: [
        "We do not sell or rent your personal information.",
        "We may share your information only with trusted third parties, including:"
      ],
      list: [
        "Payment gateway providers",
        "Shipping and courier partners",
        "IT and website service providers",
        "Government authorities when required by law",
        "These parties are required to protect your information and use it only for the services they provide."
      ]
    },
    {
      heading: "5. Data Security",
      paragraphs: [
        "We take reasonable technical and organizational measures to protect your personal information against unauthorized access, misuse, loss, or disclosure. However, no method of internet transmission or electronic storage is completely secure."
      ]
    },
    {
      heading: "6. Your Rights",
      paragraphs: ["You may request to:"],
      list: [
        "Access your personal information",
        "Correct inaccurate information",
        "Update your details",
        "Delete your personal information where legally permitted",
        "Opt out of receiving promotional communications",
        "To make any request, please contact us using the details below."
      ]
    },
    {
      heading: "7. Third-Party Links",
      paragraphs: [
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites."
      ]
    },
    {
      heading: "8. Children's Privacy",
      paragraphs: [
        "Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children."
      ]
    },
    {
      heading: "9. Changes to This Privacy Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page along with the updated effective date."
      ]
    },
    {
      heading: "10. Contact Us",
      paragraphs: ["If you have any questions or concerns regarding this Privacy Policy, please contact us:"],
      table: [
        ["Business", "SHIV SHAKTI FASHION"],
        ["Email", "info@shivshaktifashion.shop, hitesh@shivshaktifashion.shop"],
        ["Phone", "+91 98245 70190"],
        ["Address", "Plot No. 6, Near Nijdham Ashram, Ram Nagar, Rander Road, Surat."]
      ]
    }
  ]
};

export default function PolicyPage() {
  return <LegalPage {...policyContent} />;
}

