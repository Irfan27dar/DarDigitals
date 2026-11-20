import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing the use of the DarDigitals website and our creative services.",
};

const UPDATED = "20 November 2026";

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      updated={UPDATED}
      intro={
        <>
          These terms govern your use of the {site.name} website and the
          creative services we provide. By using this site or engaging{" "}
          {site.name} for a project, you agree to these terms.
        </>
      }
    >
      <h2>1. Who we are</h2>
      <p>
        {site.legalName} (&ldquo;{site.name}&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo; or &ldquo;our&rdquo;) is a creative digital studio based
        in {site.location}, providing brand identity, web &amp; digital, content
        and campaign services. You can reach us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>2. Use of this website</h2>
      <p>
        You may use this website for lawful purposes only. You agree not to
        misuse the site, attempt to gain unauthorised access, disrupt its
        operation, or use it to transmit harmful or unlawful material. We may
        update, suspend or withdraw any part of the site at any time without
        notice.
      </p>

      <h2>3. Proposals, quotes and engagements</h2>
      <p>
        Any proposal, quote or estimate we provide is an invitation to proceed,
        not a binding contract, and is valid for 30 days unless stated
        otherwise. A project begins only once scope, timeline and fees are agreed
        in writing (including by email) and any required deposit is received. The
        agreed scope defines what is included; anything outside it is handled as
        a separate request.
      </p>

      <h2>4. Fees and payment</h2>
      <ul>
        <li>
          Fees, payment schedule and any deposit are set out in the project
          proposal or statement of work.
        </li>
        <li>
          Unless agreed otherwise, invoices are payable within the period stated
          on the invoice. Work may be paused on overdue accounts.
        </li>
        <li>
          Quoted fees exclude third-party costs (such as stock assets, fonts,
          hosting, plugins or paid media) unless expressly included.
        </li>
      </ul>

      <h2>5. Client responsibilities</h2>
      <p>
        To deliver on time we rely on you to provide accurate information,
        content, brand assets, access and timely feedback and approvals. Delays
        in providing these, or changes to agreed scope, may affect timelines and
        cost. You confirm that any materials you supply do not infringe the
        rights of others and that you are authorised to use them.
      </p>

      <h2>6. Revisions and approvals</h2>
      <p>
        Each stage includes a reasonable number of revision rounds as set out in
        the proposal. Once you approve a deliverable or milestone, further changes
        may be treated as additional work. It is your responsibility to review
        deliverables carefully before approval and before anything goes live.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        Ownership of final deliverables transfers to you upon full payment,
        except for third-party materials (such as licensed fonts, stock media or
        software), which remain subject to their own licences. Until full payment
        is received, all work remains our property. We retain ownership of our
        pre-existing tools, methods and any concepts not selected, and we may
        showcase completed work in our portfolio and marketing unless we agree
        otherwise in writing.
      </p>

      <h2>8. Confidentiality</h2>
      <p>
        Each party agrees to keep the other&rsquo;s non-public information
        confidential and to use it only for the purpose of the engagement. This
        does not apply to information that is or becomes public through no fault
        of the receiving party, or that must be disclosed by law.
      </p>

      <h2>9. Warranties and disclaimer</h2>
      <p>
        We carry out our services with reasonable skill and care. Beyond that,
        this website and our deliverables are provided &ldquo;as is&rdquo; without
        any further warranties, express or implied. We do not warrant that the
        site will be uninterrupted or error-free, or guarantee any specific
        business outcome, ranking or result.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {site.name} is not liable for any
        indirect, incidental or consequential loss, or for loss of profit,
        revenue or data. Our total liability arising from any engagement is
        limited to the fees paid to us for that engagement. Nothing in these
        terms excludes liability that cannot be excluded under applicable law.
      </p>

      <h2>11. Third-party links and services</h2>
      <p>
        This site and our deliverables may reference or integrate third-party
        websites and services. We are not responsible for the content,
        availability or practices of third parties, and your use of them is at
        your own risk and subject to their terms.
      </p>

      <h2>12. Termination</h2>
      <p>
        Either party may end an engagement in writing. On termination, you agree
        to pay for all work completed and costs committed up to that date.
        Sections intended to survive termination — including intellectual
        property, confidentiality and limitation of liability — continue to
        apply.
      </p>

      <h2>13. Governing law</h2>
      <p>
        These terms are governed by the laws of the United Arab Emirates as
        applied in the Emirate of Dubai, and the courts of Dubai have exclusive
        jurisdiction over any dispute, without prejudice to any mandatory
        consumer rights.
      </p>

      <h2>14. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The version published on
        this page, with its &ldquo;last updated&rdquo; date, is the one that
        applies. Continued use of the site means you accept the current terms.
      </p>

      <h2>15. Contact</h2>
      <p>
        Questions about these terms? Email us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or reach us via the{" "}
        <a href="/contact">contact page</a>.
      </p>
    </LegalLayout>
  );
}
