import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How DarDigitals collects, uses and protects your personal information.",
};

const UPDATED = "20 November 2026";

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      updated={UPDATED}
      intro={
        <>
          This policy explains what personal information {site.name} collects,
          how we use it, and the choices you have. We keep it short and only
          collect what we need to work with you.
        </>
      }
    >
      <h2>1. Who we are</h2>
      <p>
        {site.legalName} (&ldquo;{site.name}&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo; or &ldquo;our&rdquo;) is a creative digital studio based
        in {site.location}. For any privacy question, contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>2. Information we collect</h2>
      <ul>
        <li>
          <strong>Details you give us.</strong> When you submit the contact form
          or get in touch, we collect your name, company, email, WhatsApp or
          phone number, budget range, target date, and whatever you tell us about
          your project.
        </li>
        <li>
          <strong>Correspondence.</strong> Messages you send us by email,
          WhatsApp, phone or other channels, and our replies.
        </li>
        <li>
          <strong>Usage data.</strong> Basic technical information your browser
          sends automatically — such as IP address, device and browser type, and
          the pages you view — collected to keep the site secure and understand
          how it is used.
        </li>
      </ul>

      <h2>3. How we use your information</h2>
      <ul>
        <li>To respond to your enquiry and discuss a possible project.</li>
        <li>To provide, manage and improve our services and this website.</li>
        <li>To send project-related communications and, where relevant, invoices.</li>
        <li>To keep the site secure and to comply with our legal obligations.</li>
      </ul>
      <p>
        We do not sell your personal information, and we do not use it for
        automated decision-making.
      </p>

      <h2>4. Legal basis</h2>
      <p>
        We process your information where it is necessary to respond to your
        request and take steps toward or perform a contract, where we have a
        legitimate interest in running and improving our studio, where you have
        given consent (which you can withdraw at any time), or where we must to
        comply with the law.
      </p>

      <h2>5. Cookies and analytics</h2>
      <p>
        This site uses only the cookies and similar technologies needed for it to
        function and, where enabled, privacy-respecting analytics to understand
        traffic in aggregate. You can control or block cookies through your
        browser settings; doing so may affect some functionality.
      </p>

      <h2>6. Sharing your information</h2>
      <p>
        We share personal information only with trusted service providers who
        help us operate — for example hosting, email and analytics providers —
        and only as needed to deliver those services. We may also disclose
        information where required by law or to protect our rights. We do not
        sell or rent your information to third parties.
      </p>

      <h2>7. How long we keep it</h2>
      <p>
        We keep your information only as long as needed for the purpose it was
        collected — to handle your enquiry, deliver a project, and meet legal,
        accounting or reporting requirements — after which we delete or anonymise
        it.
      </p>

      <h2>8. How we protect it</h2>
      <p>
        We use reasonable technical and organisational measures to protect your
        information. No method of transmission or storage is completely secure,
        so we cannot guarantee absolute security, but we work to safeguard your
        data appropriately.
      </p>

      <h2>9. Your rights</h2>
      <p>
        Subject to applicable law, you may ask us to access, correct, update or
        delete your personal information, or to restrict or object to certain
        processing, and you may withdraw consent at any time. To exercise any of
        these, email <a href={`mailto:${site.email}`}>{site.email}</a> and we will
        respond within a reasonable time.
      </p>

      <h2>10. International transfers</h2>
      <p>
        We and our service providers may process your information in countries
        other than your own. Where we do, we take steps to ensure it is handled
        in line with this policy and applicable law.
      </p>

      <h2>11. Third-party links</h2>
      <p>
        Our website and work may link to third-party sites and services that we
        do not control. This policy does not cover them; please review their own
        privacy policies.
      </p>

      <h2>12. Children&rsquo;s privacy</h2>
      <p>
        Our services are intended for businesses and adults. We do not knowingly
        collect personal information from children.
      </p>

      <h2>13. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The version on this page,
        with its &ldquo;last updated&rdquo; date, is the current one.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about your privacy or this policy? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or use the{" "}
        <a href="/contact">contact page</a>.
      </p>
    </LegalLayout>
  );
}
