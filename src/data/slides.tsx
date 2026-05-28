import { Slide } from '../types';
import { 
  FileText, Clock, AlertTriangle, CheckCircle, Building2, 
  Files, FileSignature, Scale, ChevronRight 
} from 'lucide-react';

export const slides: Slide[] = [
  {
    id: 'title',
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-6">
        <div className="p-4 bg-amber-400 text-red-800 rounded-2xl mb-4">
          <Building2 size={48} />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-red-900 leading-tight">
          Settlement of <br />
          <span className="text-red-600">Deceased Claims</span>
        </h1>
        <p className="text-xl md:text-2xl text-red-700/80 font-medium">
          In Post Office Savings Bank (POSB)
        </p>
        <div className="mt-12 px-6 py-2 bg-red-50 rounded-full border border-red-200">
          <p className="text-sm font-mono text-red-700 uppercase tracking-widest text-center font-bold">
            Based on SB Order No. 31/2020 & 18/2023
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'intro',
    title: 'Core Principles & Introduction',
    content: (
      <div className="flex-1 flex flex-col gap-8 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center rounded-xl">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">7-Day Mandate</h3>
            <p className="text-slate-600 leading-relaxed">
              The entire settlement process, regardless of scheme or claim type, MUST be completed within exactly <strong>7 working days</strong> of receiving the claim. Delay holds the official personally responsible.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 flex items-center justify-center rounded-xl">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Payment Medium</h3>
            <p className="text-slate-600 leading-relaxed">
              All deceased claim payouts must invariably be made via <strong>Crossed Cheque</strong> or <strong>credit directly into the POSB Account</strong>. Cash payments are strictly prohibited.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-bold text-slate-900 mb-4 px-2 tracking-tight">The Three Types of Claims</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Type 1: With Nomination', 'Type 2: With Legal Evidence', 'Type 3: Without Nom/Evidence (≤ ₹5L)'].map((type, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold font-mono text-sm">
                  {i + 1}
                </div>
                <span className="font-semibold text-slate-800">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'common-docs',
    title: 'Universal Documents Required',
    content: (
      <div className="flex-1 flex gap-8">
        <div className="w-1/3 bg-red-800 text-white p-8 rounded-2xl shadow-lg flex flex-col shadow-red-900/10 border-b-4 border-amber-400">
          <Files size={32} className="mb-6 text-amber-400" />
          <h3 className="text-2xl font-bold mb-4">Baseline Standard</h3>
          <p className="text-red-100 leading-relaxed">
            These documents are universally required across all three claim types. Ensure complete physical verification before processing.
          </p>
          <div className="mt-8 p-4 bg-red-900/50 rounded-xl border border-red-700">
            <p className="text-sm font-medium text-amber-400 mb-1 flex items-center gap-2">
              <AlertTriangle size={16} /> Important Note
            </p>
            <p className="text-xs text-red-200 leading-relaxed">
              No separate SB-7A (Account Closure Form) is required. The sanction order on the claim form itself serves as the closure voucher.
            </p>
          </div>
        </div>
        <div className="w-2/3 flex flex-col justify-center">
          <ul className="space-y-4">
            {[
              'Claim Application Form (in prescribed format, duplicate)',
              'Original Death Certificate (or photocopy verified by PM "Compared with original and found correct")',
              'Original Passbook or Savings Certificate',
              'ID Proof and Address Proof of the Claimant(s)',
              'Two Witnesses with their ID and Address proofs'
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-red-100 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="mt-0.5 bg-amber-50 text-amber-600 p-1.5 rounded-lg">
                  <CheckCircle size={20} />
                </div>
                <span className="text-red-900 text-lg font-medium leading-normal">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'type-1',
    title: 'Type 1: With Nomination',
    content: (
      <div className="flex flex-col h-full gap-6">
        <div className="bg-amber-50 border border-amber-200 text-amber-900 px-6 py-4 rounded-xl flex items-center gap-4">
          <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
             <Scale size={24} />
          </div>
          <div>
            <h4 className="font-bold text-amber-900">Sanction Limit: None</h4>
            <p className="text-amber-800">PMs/SPMs of ALL Sub & Head Offices can sanction regardless of the amount limit.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="bg-white border border-red-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm">
            <h3 className="text-xl font-bold text-red-900 border-b border-red-50 pb-3">Multiple Nominees</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <ChevronRight className="flex-shrink-0 text-red-600 mt-1" size={18} />
                <span>Balances are distributed in the exact proportion specified during nomination.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="flex-shrink-0 text-red-600 mt-1" size={18} />
                <span>If no proportion was provided, it is split equally among surviving nominees.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="flex-shrink-0 text-red-600 mt-1" size={18} />
                <span>If a nominee cannot attend, they can authorize another nominee to claim their share via a Form-14 Disclaimer.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-red-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm">
            <h3 className="text-xl font-bold text-red-900 border-b border-red-50 pb-3">Special Scenarios</h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="bg-amber-50 text-amber-600 p-1.5 rounded flex-shrink-0">
                  <AlertTriangle size={16} />
                </div>
                <div>
                  <strong className="text-red-900 block mb-1">Deceased Nominee Rule</strong>
                  If the sole/last surviving nominee dies, the claim settles to the <em>Legal Heir of the Nominee</em>, NOT the legal heir of the original depositor.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-red-50 text-red-600 p-1.5 rounded flex-shrink-0">
                  <FileSignature size={16} />
                </div>
                <div>
                  <strong className="text-red-900 block mb-1">Conflict of Heir/Nominee</strong>
                  The PO gives precedence to the nominee over all other heirs unless stopped by an active court order BEFORE sanctioning.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'type-2',
    title: 'Type 2: Legal Evidence (No Nomination)',
    content: (
      <div className="flex flex-col gap-8 h-full">
         <p className="text-xl text-slate-700 leading-relaxed max-w-3xl">
           Applied when the depositor made no nomination, but the claimant has obtained legally binding formal estate documentation from a competent civil court.
         </p>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white border shadow-sm border-red-200 rounded-2xl p-6 border-t-4 border-t-red-600">
              <h3 className="font-bold text-red-900 text-lg mb-2">Probate of Will</h3>
              <p className="text-slate-700 text-sm">Court certificate validating that the Will is genuine and represents the final testament of the deceased.</p>
           </div>
           <div className="bg-white border shadow-sm border-red-200 rounded-2xl p-6 border-t-4 border-t-red-600">
              <h3 className="font-bold text-red-900 text-lg mb-2">Succession Certificate</h3>
              <p className="text-slate-700 text-sm">Issued by Civil Court for property of a deceased who died intestate (without a Will).</p>
           </div>
           <div className="bg-white border shadow-sm border-red-200 rounded-2xl p-6 border-t-4 border-t-red-600">
              <h3 className="font-bold text-red-900 text-lg mb-2">Letter of Administration</h3>
              <p className="text-slate-700 text-sm">Court mandate appointing an administrator when no Will was left or a Will lacks specific specification.</p>
           </div>
         </div>

         <div className="mt-4 flex-1">
            <h3 className="text-lg font-bold text-red-900 mb-4">Financial Sanction Authorities</h3>
            <div className="overflow-hidden border border-red-200 rounded-xl shadow-sm">
              <table className="min-w-full divide-y bg-white divide-red-100 relative">
                <thead className="bg-red-50 text-left">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-red-900">Post Office Status / Grade</th>
                    <th className="px-6 py-4 text-sm font-semibold text-red-900 text-right">Maximum Sanction Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-50">
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-800">T/S SPM & LSG SPM (Lower Selection Grade)</td>
                    <td className="px-6 py-4 text-sm font-mono text-right text-red-900 font-bold">₹ 50,000</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="px-6 py-4 text-sm text-slate-800">HSG-II SPM / HSG-I PM (Non-Gazetted)</td>
                    <td className="px-6 py-4 text-sm font-mono text-right font-bold text-red-900">No Limit</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-800">Sr. PM / SPOs / All Gazetted (Group A & B) Officers</td>
                    <td className="px-6 py-4 text-sm font-mono text-right font-bold text-red-900">No Limit</td>
                  </tr>
                </tbody>
              </table>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 'type-3',
    title: 'Type 3: No Nomination, No Evidence',
    content: (
      <div className="flex flex-col gap-6 h-full">
         <div className="flex items-center justify-between p-5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900">
           <div className="flex items-center gap-3">
             <AlertTriangle className="text-amber-600" />
             <div>
               <h4 className="font-bold text-lg">Strict Pre-Conditions</h4>
               <p className="text-sm text-amber-800/80">Account balance MUST be ≤ ₹5,00,000. Claim ONLY accepted after 6 months from the date of death.</p>
             </div>
           </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 mt-2">
            <div>
              <h3 className="text-xl font-bold text-red-900 mb-4 border-b border-red-100 pb-2">Mandatory Annexures Matrix</h3>
              <ul className="space-y-3">
                <li className="bg-white p-3 rounded-xl border border-red-100 shadow-sm flex items-start gap-3">
                  <div className="bg-red-50 p-2 rounded-lg font-bold text-red-700">F-13</div>
                  <div>
                    <strong className="block text-slate-900 text-sm mb-0.5">Affidavit</strong>
                    <p className="text-xs text-slate-600">Signed by: <strong className="text-slate-800">All Legal Heirs</strong><br/>Executed before: Notary Public</p>
                  </div>
                </li>
                <li className="bg-white p-3 rounded-xl border border-red-100 shadow-sm flex items-start gap-3">
                  <div className="bg-red-50 p-2 rounded-lg font-bold text-red-700">F-14</div>
                  <div>
                    <strong className="block text-slate-900 text-sm mb-0.5">Letter of Disclaimer</strong>
                    <p className="text-xs text-slate-600">Signed by: <strong className="text-slate-800">All Legal Heirs EXCEPT Claimant</strong><br/>Executed before: Notary Public</p>
                  </div>
                </li>
                <li className="bg-white p-3 rounded-xl border border-red-100 shadow-sm flex items-start gap-3">
                  <div className="bg-red-50 p-2 rounded-lg font-bold text-red-700">F-15</div>
                  <div>
                    <strong className="block text-slate-900 text-sm mb-0.5">Letter of Indemnity</strong>
                    <p className="text-xs text-slate-600">Signed by: <strong className="text-slate-800">Claimant, Sureties & Witnesses</strong><br/>Executed before: Notary Public</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-900 mb-4 border-b border-red-100 pb-2">Sanctioning Limits Matrix (Revised 2023)</h3>
              <div className="border border-red-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <table className="min-w-full divide-y divide-red-100">
                   <tbody className="divide-y divide-red-50">
                      <tr>
                        <td className="px-4 py-3 text-sm text-slate-800 font-medium">T/S Departmental SOs / LSG SOs</td>
                        <td className="px-4 py-3 text-sm font-mono text-right font-bold text-red-900">₹50,000</td>
                      </tr>
                      <tr className="bg-amber-50/50">
                        <td className="px-4 py-3 text-sm text-slate-800 font-medium">HSG-II, HSG-I (Non-Gazetted SOs/HPOs)</td>
                        <td className="px-4 py-3 text-sm font-mono text-right font-bold text-red-900">₹1,00,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-slate-800 font-medium">SPOs, Sr. PM, Gazetted Group-B/A</td>
                        <td className="px-4 py-3 text-sm font-mono text-right font-bold w-32 text-red-900">₹5,00,000</td>
                      </tr>
                      <tr className="bg-amber-50/50">
                        <td className="px-4 py-3 text-sm text-slate-800 font-medium">Regional Director / Director GPO</td>
                        <td className="px-4 py-3 text-sm font-mono text-right font-bold w-32 text-red-900">No Limit</td>
                      </tr>
                   </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-red-800 bg-red-50 p-3 rounded-lg border border-red-100">
                <strong>Note:</strong> Calculate Balance = Account credit + interest accrued up to the end of the preceding financial year. For certificates, use Face Value + accrued interest.
              </p>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 'schemes',
    title: 'Scheme Rules: Continuation & Interest',
    content: (
      <div className="flex-1 flex flex-col pt-2 h-full">
         <div className="border border-red-200 shadow-sm rounded-2xl overflow-hidden bg-white flex-1 flex flex-col">
           <table className="w-full text-left flex-1 flex flex-col">
             <thead className="bg-red-800 text-white flex w-full">
               <tr className="flex w-full border-b-2 border-amber-400">
                 <th className="py-4 px-6 text-sm font-semibold w-24">Scheme</th>
                 <th className="py-4 px-6 text-sm font-semibold w-1/3 border-l border-red-700">Continuation Rule</th>
                 <th className="py-4 px-6 text-sm font-semibold flex-1 border-l border-red-700">Interest Calculation</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-red-100 flex-1 flex flex-col overflow-y-auto">
               {[
                 ['SB / MIS', 'Cannot continue — must close.', 'Interest paid up to the preceding month of closure/refund.'],
                 ['RD / TD', 'Can be closed immediately OR transferred to claimant till maturity.', 'RD: Full maturity value if continued. TD: TD rate for completed years; POSA rate for extra months.'],
                 ['SCSS', 'Only Spouse (if sole nominee & eligible) can continue. Others must close.', 'SCSS rate up to date of death; POSA rate from date of death to preceding date of payment.'],
                 ['SSA / PPF', 'Cannot continue — must close.', 'PPF: Preceding month. SSA: SSA rate till death; POSA base rate till payment date.'],
                 ['NSC / KVP', 'Can continue till maturity OR close prematurely.', 'If continued: Full maturity. If closed prep: Apply explicit time-bracket tables for accrued rate.']
               ].map((row, i) => (
                 <tr key={i} className={`flex w-full hover:bg-amber-50/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-red-50/30'}`}>
                   <td className="py-4 px-6 text-sm font-bold w-24 text-red-900">{row[0]}</td>
                   <td className="py-4 px-6 text-sm text-slate-700 w-1/3 border-l border-red-100">{row[1]}</td>
                   <td className="py-4 px-6 text-sm text-slate-700 flex-1 border-l border-red-100 leading-relaxed">{row[2]}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
      </div>
    )
  },
  {
    id: 'edge-cases',
    title: 'Special Situations & Edge Cases',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full flex-1 align-middle">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 border-l-4 border-l-amber-400 flex flex-col gap-3">
          <h3 className="text-xl font-bold text-red-900 border-b pb-2 border-red-50">Joint Accounts (One Dies)</h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            In a joint (OR) account, upon the death of one holder, the surviving joint holder inherits the entire balance. The deceased partner's nomination is overridden as the survivor holds full sovereign rights.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 border-l-4 border-l-amber-400 flex flex-col gap-3">
          <h3 className="text-xl font-bold text-red-900 border-b pb-2 border-red-50">Missing Passbooks</h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            If the passbook is lost, refer the case centrally to the Head of Division (SPO) to issue specific closing orders. Sanction orders and payment warrants must securely attach the order.
          </p>
        </div>

         <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 border-l-4 border-l-amber-400 flex flex-col gap-3">
          <h3 className="text-xl font-bold text-red-900 border-b pb-2 border-red-50">Name Discrepancies</h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            If the record mismatches the Death Certificate, claimant provides manuscript evidence + 2 witnesses to Head of Division/GPO to securely issue a <strong>Reconciliation Certificate</strong> accompanying the claim.
          </p>
        </div>

        <div className="bg-amber-400 text-red-900 p-6 rounded-2xl shadow-sm border border-amber-500 flex flex-col gap-3">
          <h3 className="text-xl font-bold border-b border-red-900/20 pb-2">Foreign Claimants</h3>
          <p className="text-red-900/90 text-sm leading-relaxed">
            The PO performs NO direct outward foreign remittance. Settlements operate strictly within India to a recorded local Power of Attorney holder. (HAGUE Apostille verified).
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'spm-duties',
    title: 'Postmaster Verification & Processing Duties',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full flex-1 align-middle">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex flex-col gap-4">
          <h3 className="text-xl font-bold text-red-900 border-b pb-2 border-red-50 flex items-center gap-2">
            <FileSignature className="text-red-600" /> Form Certifications
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed mb-2">
            The SPM/PM must explicitly clarify the following in the body of the claim form:
          </p>
          <ul className="space-y-3 bg-red-50/50 p-4 rounded-xl border border-red-100">
            <li className="flex gap-2 text-sm text-slate-800">
              <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" /> 
              <span>"This is to certify that RD/SB/TD account no ______ stands at ______ post office in the name of ______"</span>
            </li>
            <li className="flex gap-2 text-sm text-slate-800">
              <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" /> 
              <span>"Nominee has not registered in the account No ______"</span>
            </li>
            <li className="flex gap-2 text-sm text-slate-800">
              <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" /> 
              <span>"This account has no freeze / pledge / objection pending against it."</span>
            </li>
            <li className="flex gap-2 text-sm text-slate-800">
              <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" /> 
              <span>"Balance in the PB as on dt. ______ is ______"</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex flex-col gap-4">
          <h3 className="text-xl font-bold text-red-900 border-b pb-2 border-red-50 flex items-center gap-2">
            <CheckCircle className="text-emerald-600" /> Critical Checklist
          </h3>
          <ul className="space-y-3 overflow-y-auto pr-2 pb-2">
            {[
              'Compare Death Certificate with original; SPM/PM must date, sign, and remark "Compared with original and found correct".',
              'Verify signatures of all legal heirs, sureties, and witnesses on Forms 13, 14, and 15.',
              'Ensure all annexures are executed before a Notary Public.',
              'Verify ID and Address Proof of Claimant AND both Witnesses.',
              'Issue Acknowledgement on the same day the claim is received.',
              'Enter details in the Claim Register properly.',
              'Payment MUST be via SB credit or Cheque irrespective of amount.'
            ].map((text, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-700 leading-relaxed items-start">
                <span className="w-5 h-5 rounded bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i+1}</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'faq',
    title: 'Frequently Asked Questions (Q&A)',
    content: (
      <div className="flex-1 overflow-y-auto space-y-4 h-full pb-4 pr-2">
        <div className="bg-white p-5 rounded-xl border border-red-100 shadow-sm transition-all hover:shadow-md hover:border-red-300">
          <h3 className="font-bold text-red-900 text-lg flex gap-3 items-start">
            <span className="text-red-600 bg-red-50 p-1 rounded">Q:</span> 
            If valid Legal Evidence (Succession Certificate, Probate of Will, etc.) is available, which forms are waived?
          </h3>
          <p className="mt-3 text-slate-700 flex gap-3 items-start leading-relaxed">
            <span className="font-bold text-emerald-600 bg-emerald-50 p-1 rounded">A:</span> 
            <span>If valid Legal Evidence is provided (Type 2 Claim), the claimant is <strong>NOT required</strong> to submit Form-13 (Affidavit), Form-14 (Letter of Disclaimer), or Form-15 (Letter of Indemnity). These non-judicial stamp paper forms are only mandatory for claims without nomination AND without legal evidence (Type 3).</span>
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-red-100 shadow-sm transition-all hover:shadow-md hover:border-red-300">
          <h3 className="font-bold text-red-900 text-lg flex gap-3 items-start">
            <span className="text-red-600 bg-red-50 p-1 rounded">Q:</span> 
            What is the absolute maximum limit for settling a claim without nomination and without legal evidence?
          </h3>
          <p className="mt-3 text-slate-700 flex gap-3 items-start leading-relaxed">
            <span className="font-bold text-emerald-600 bg-emerald-50 p-1 rounded">A:</span> 
            <span>The maximum sanctioned limit is <strong>₹5,00,000</strong>. If the total balance (principal plus accrued interest) exceeds this ₹5L limit, the claimant must approach a competent civil court to obtain a Succession Certificate.</span>
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-red-100 shadow-sm transition-all hover:shadow-md hover:border-red-300">
          <h3 className="font-bold text-red-900 text-lg flex gap-3 items-start">
            <span className="text-red-600 bg-red-50 p-1 rounded">Q:</span> 
            Can a deceased claim payout be made in cash if the settlement amount is very small?
          </h3>
          <p className="mt-3 text-slate-700 flex gap-3 items-start leading-relaxed">
            <span className="font-bold text-emerald-600 bg-emerald-50 p-1 rounded">A:</span> 
            <span><strong>No.</strong> Under no circumstances can a deceased claim be settled in cash. Payouts must invariably be made via a Crossed Cheque or by direct credit into the claimant's Post Office Savings Account.</span>
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-red-100 shadow-sm transition-all hover:shadow-md hover:border-red-300">
          <h3 className="font-bold text-red-900 text-lg flex gap-3 items-start">
            <span className="text-red-600 bg-red-50 p-1 rounded">Q:</span> 
            What is the waiting period for submitting a claim without nomination and without legal evidence?
          </h3>
          <p className="mt-3 text-slate-700 flex gap-3 items-start leading-relaxed">
            <span className="font-bold text-emerald-600 bg-emerald-50 p-1 rounded">A:</span> 
            <span>A Type 3 claim can only be submitted <strong>after the expiry of 6 months</strong> from the date of the depositor's death. Unlike Type 1 (Nomination) and Type 2 (Legal Evidence) claims, which can be filed immediately.</span>
          </p>
        </div>
      </div>
    )
  }
];
