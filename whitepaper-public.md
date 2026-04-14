# PrivDNA: Biological Data Sovereignty Through Air-Gapped Whole Genome Sequencing

**Technical Whitepaper**

---

**Prepared by:** PrivDNA
**Domain:** [PrivDNA.com](https://privdna.com)
**Location:** New York City, New York
**Date:** March 2026

---

> *"Your genome is the most personal data you will ever generate. It cannot be changed, cannot be revoked, and cannot be anonymized. It deserves infrastructure built from first principles around that reality."*

---

## TABLE OF CONTENTS

1. [Executive Summary](#i-executive-summary)
2. [The Problem: Genetic Data Exploitation](#ii-the-problem-genetic-data-exploitation)
3. [The Solution: PrivDNA](#iii-the-solution-privdna)
4. [Market Analysis](#iv-market-analysis)
5. [Technical Architecture](#v-technical-architecture)
6. [Facility Design and Customer Experience](#vi-facility-design-and-customer-experience)
7. [Regulatory and Compliance Framework](#vii-regulatory-and-compliance-framework)
8. [Operational Playbook](#viii-operational-playbook)
9. [Referral Partnership Model](#ix-referral-partnership-model)
10. [Appendix A: Glossary](#appendix-a-glossary-of-key-terms)
11. [Appendix B: Regulatory Timeline](#appendix-b-regulatory-timeline)
12. [Appendix C: References and Sources](#appendix-c-references-and-sources)

---

# I. EXECUTIVE SUMMARY

PrivDNA is a first-of-its-kind privacy-sovereign whole genome sequencing (WGS) service operating from a physical storefront in New York City. We sequence customers' complete genomes at clinical-grade accuracy (≥90% of bases above Q30), process all data on air-gapped servers that never touch the internet, deliver results on FIPS 140-3 certified encrypted hardware, and destroy all on-premise copies under NIST SP 800-88 Rev. 2 standards. Customers visit the glass-walled laboratory twice -- once to hand over their sample, and again to receive their encrypted drive and witness the on-premise data being destroyed.

**The core promise: an unbroken chain of custody from your sample to your hands. Your genome is collected in person, processed on air-gapped hardware, handed to you on an encrypted drive, and destroyed on-site under your eyes. No copies. No cloud. No exceptions.**

### Why Now

The consumer genomics industry is in crisis. In March 2025, 23andMe filed for Chapter 11 bankruptcy and its approximately 15 million customers' genetic data was acquired by a third party for $305 million through a legal structure that bypassed re-consent requirements. A Nebula Genomics class-action lawsuit alleges the now-defunct "privacy-first" company shared genetic data with Meta, Google, and Microsoft via embedded tracking tools (ProPhase Labs, Nebula's parent, filed Chapter 11 for its lab subsidiaries in September 2025). Consumer trust in genetic testing services has collapsed at the exact moment when whole genome sequencing costs have fallen below $250 per genome at the laboratory level.

This confluence creates a market opening for a fundamentally different model -- one built on physical transparency, cryptographic verifiability, and zero data retention.

### The Business

- **Service:** Clinical-grade 30x whole genome sequencing with raw data delivery (BAM, VCF, gVCF files)
- **Price point:** $3,500 per genome (luxury privacy premium justified by physical transparency, air-gapped processing, certified data destruction, and FIPS 140-3 encrypted delivery)
- **Model:** Raw data only -- no medical interpretation. Pre-vetted referral network for genetic counseling and clinical interpretation
- **Differentiator:** Only WGS provider with a physical storefront, glass-walled lab, open-source pipeline, and witnessed data destruction
- **Open source commitment:** Entire bioinformatics pipeline published on GitHub under permissive licenses. Customers can audit the code that processes their DNA.

---

# II. THE PROBLEM: GENETIC DATA EXPLOITATION

## 2.1 The Unique Nature of Genomic Data

Genomic data occupies a singular position in the hierarchy of personal information. Unlike a password, it cannot be changed. Unlike a Social Security number, it cannot be reissued. Unlike financial records, it does not expire or become irrelevant with time. A genome sequenced today will be re-analyzable with increasing precision for the lifetime of the individual and, by extension, their biological relatives.

This permanence creates an asymmetric risk profile that existing data protection frameworks were not designed to address. A breach of genomic data is irrevocable -- there is no "credit monitoring" equivalent for DNA.

## 2.2 The 23andMe Collapse: A Case Study in Systemic Failure

The trajectory of 23andMe illustrates the structural vulnerability of the centralized genomics model:

**Timeline of Collapse:**

- **2021:** 23andMe [goes public via SPAC merger](https://www.cnbc.com/2021/02/04/dna-testing-firm-23andme-to-go-public-through-branson-backed-spac.html) with VG Acquisition Corp. at a $3.5 billion deal valuation; shares briefly trade at an implied market capitalization in the multi-billion-dollar range following listing. The company holds the genetic data of over 10 million customers (growing to approximately 15 million by the time of bankruptcy).
- **April-October 2023:** Beginning in late April 2023, a credential-stuffing attack compromises roughly 14,000 accounts, through which approximately 6.9 million customer profiles are accessed via the DNA Relatives and Family Tree features -- including ethnicity estimates, geographic locations, and family tree connections. The breach is publicly disclosed in October 2023; a [joint UK ICO / Canadian OPC investigation](https://www.priv.gc.ca/en/opc-actions-and-decisions/investigations/investigations-into-businesses/2025/pipeda-2025-001/) subsequently confirms the total at roughly 6.98 million affected individuals worldwide. The company is criticized for not requiring multi-factor authentication.
- **September 2024:** All independent board members resign.
- **November 2024:** The company lays off over 200 employees (~40% of its workforce).
- **March 2025:** 23andMe [files for Chapter 11 bankruptcy](https://www.cnbc.com/2025/03/24/23andme-files-for-bankruptcy-anne-wojcicki-steps-down-as-ceo.html) in the Eastern District of Missouri. CEO Anne Wojcicki resigns.
- **March 2025:** A bankruptcy judge rules that 23andMe may sell customer genetic and ancestry data to bidders.
- **May 2025:** [Regeneron initially wins](https://www.cnbc.com/2025/05/19/regeneron-pharmaceuticals-to-buy-23andme-for-256-million-including-data.html) the bankruptcy auction at $256 million.
- **June 2025:** In a reopened bidding process, TTAM Research Institute (a nonprofit founded by Wojcicki) prevails with a $305 million bid. The court approves the sale on [June 30](https://foleyhoag.com/news-and-insights/publications/alerts-and-updates/2025/july/23andme-bankruptcy-update-how-the-proceedings-highlight-best-practices-for-handling-and-transferring/), using an "equity toggle" structure where data is placed in a subsidiary and then the subsidiary's equity is sold -- a mechanism the court ruled did not constitute a third-party "transfer" requiring explicit re-consent under state privacy statutes.
- **July 2025:** The sale closes on July 14. TTAM acquires all 23andMe assets. The company is subsequently renamed ChromeCo, Inc.

The collapse from a peak implied market capitalization of $6 billion to a $305 million asset sale is significant not only as a financial event but as a structural demonstration: when a company holds centralized genetic data, that data becomes an asset in liquidation proceedings, subject to sale without meaningful individual consent.

Multiple state attorneys general urged consumers to delete their data before the sale closed. The incident prompted a [2025 article in *Science*](https://www.science.org/doi/10.1126/science.adz7229) examining the systemic fragility of consumer genetic privacy.

## 2.3 The Broader Pattern of Data Monetization

23andMe was not an anomaly. The centralized genetics business model is built on data monetization:

- 23andMe's [$300 million equity investment and R&D partnership with GlaxoSmithKline](https://www.gsk.com/en-gb/media/press-releases/gsk-and-23andme-sign-agreement-to-leverage-genetic-insights-for-the-development-of-novel-medicines/) (2018) granted the pharmaceutical company access to aggregated genetic data for drug target discovery.
- Ancestry was [acquired by Blackstone in 2020 for $4.7 billion](https://www.blackstone.com/news/press/blackstone-completes-acquisition-of-ancestry-leading-online-family-history-business-for-4-7-billion/). Industry [analysts noted an implied enterprise value of roughly $261 per DNA customer](https://www.cbsnews.com/news/blackstone-private-equity-ancestry-com-dna/), suggesting the database itself was a primary asset.
- Nebula Genomics shut down its consumer service on February 5, 2025 (its parent company ProPhase Labs [filed Chapter 11 for its COVID-19 testing laboratory subsidiaries](https://ir.prophaselabs.com/news-events/press-releases/detail/250/prophase-labs-inc-announces-completion-of-important-next) in September 2025). Despite marketing itself as "privacy-first" with blockchain-based data ownership, Nebula faces a [2024 class-action lawsuit (*Portillo v. Nebula Genomics*)](https://www.classaction.org/media/portillov-nebula-genomics-inc-et-al.pdf) alleging the company shared genetic information with Meta, Google, and Microsoft through embedded web tracking tools (Facebook Pixel, Google Analytics, Microsoft Clarity). A federal court denied Nebula's motion to dismiss in March 2026.

The pattern is consistent: companies that hold centralized genetic databases face irresistible economic pressure to monetize that data, regardless of initial privacy commitments.

## 2.4 Consumer Sentiment: Trust at Historic Lows

The erosion of trust is measurable:

- **70%** of consumers express concern about data privacy and security when using digital services ([Deloitte 2025 Connected Consumer](https://www.deloitte.com/us/en/insights/industry/telecommunications/connectivity-mobile-trends-survey.html))
- Only **48%** of respondents believe the benefits of online services outweigh privacy concerns -- the lowest level since Deloitte began tracking in 2019 ([Deloitte press release](https://www2.deloitte.com/us/en/pages/about-deloitte/articles/press-releases/increasing-consumer-privacy-and-security-concerns-in-the-generative-ai-era.html))
- **73%** of Americans feel they have very little or no control over what companies do with their personal data ([Pew Research Center, 2023](https://www.pewresearch.org/internet/2023/10/18/how-americans-view-data-privacy/))
- Only **1 in 10** consumers are willing to share sensitive biometric data (Deloitte, 2025)
- Only **48%** of Americans said it was acceptable for DNA testing companies to share data with law enforcement, while a third said it was unacceptable ([Pew Research Center, 2020](https://www.pewresearch.org/short-reads/2020/02/04/about-half-of-americans-are-ok-with-dna-testing-companies-sharing-user-data-with-law-enforcement/))

The regulatory environment is responding. Multiple U.S. states enacted genetic privacy legislation in 2024-2025, including the [Texas Genomic Act of 2025](https://statutes.capitol.texas.gov/Docs/HS/htm/HS.174.htm), [South Dakota SB 49](https://mylrc.sdlegislature.gov/api/Documents/305520.pdf) (effective July 2026), and laws in Nebraska, Alabama, Montana, and Florida. Rhode Island, Vermont, and Utah have proposed additional legislation in early 2026.

## 2.5 The Interpretation Gap

Despite this distrust, demand for genomic information continues to grow. As of early 2019, [approximately 26 million people had undergone consumer genetic testing](https://www.technologyreview.com/2019/02/11/103446/more-than-26-million-people-have-taken-an-at-home-ancestry-test/), primarily in the United States (MIT Technology Review), and the number has grown substantially since. The whole genome sequencing market was valued at $2.12 billion in 2024 and is projected to grow at a 22.17% CAGR, reaching $6.67 billion by 2030 ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/whole-genome-sequencing-market-report)).

Consumers want access to their genomic data. They do not want the companies that generate it to keep copies.

This gap -- between demand for genomic information and distrust of genomic custodians -- is the market PrivDNA was designed to fill.

---

# III. THE SOLUTION: PRIVDNA

## 3.1 The Core Model: A Secure Data Refinery

PrivDNA is not a medical clinic. It is not a diagnostics company. It is a **secure data refinery** -- a facility that takes a biological sample as input, produces structured genomic data as output, and retains nothing.

The business model rests on three pillars:

**1. Physical Transparency**
The laboratory is visible through a floor-to-ceiling glass wall. At the intake visit, customers watch their sample being collected and barcoded at the lab bench, logged into chain of custody in real time. At the delivery visit four to six business days later, they watch their encrypted drive being prepared and the on-premise data being cryptographically destroyed. The 38-hour sequencing run and downstream processing happen between visits and are verifiable via the open-source pipeline, not by live observation. A dedicated Technical Representative -- the "Genomic Concierge" -- narrates the lab activities visible during each visit and walks customers through what happened between them.

**2. Cryptographic Verifiability**
The entire bioinformatics pipeline is open source, published on GitHub under permissive licenses (MIT/BSD/Apache 2.0). Any customer, or any auditor acting on their behalf, can inspect the code to verify there are no telemetry endpoints, no cloud synchronization calls, and no data exfiltration channels. The pipeline is deterministic: given the same input, it produces the same output, verifiable via SHA-256 checksums.

**3. Zero Data Retention**
Upon delivery, all on-premise copies of the customer's data are destroyed under NIST SP 800-88 Rev. 2 Purge standards using cryptographic erasure on self-encrypting NVMe drives. The customer receives a Certificate of Destruction documenting the media serial numbers, sanitization method, timestamp, and technician identity. The customer witnesses the destruction process through the glass wall.

## 3.2 What the Customer Receives

Each customer receives a FIPS 140-3 Level 3 certified encrypted USB drive (Kingston IronKey D500S or equivalent) containing:

| File | Format | Approximate Size | Description |
|------|--------|-----------------|-------------|
| Aligned reads | BAM + BAI index | ~80-100 GB | Complete sequencing reads aligned to GRCh38 reference genome |
| Variant calls | VCF | ~1 GB | All identified genetic variants (SNPs, indels) |
| Genomic VCF | gVCF | ~5-10 GB | Comprehensive variant data including non-variant positions |
| Quality report | HTML (MultiQC) | ~50 MB | Sequencing quality metrics, coverage statistics |
| Pipeline manifest | JSON + SHA-256 | <1 MB | Exact software versions, parameters, and checksums for reproducibility |
| Certificate of Destruction | PDF | <1 MB | Documented proof of on-premise data erasure |

**Default deliverables:** BAM + VCF + gVCF are delivered by default. FASTQ files are not included in the standard delivery to conserve USB drive space, but can be regenerated from the BAM file if needed (using `samtools fastq`). Customers who specifically require FASTQ files may request them at the time of order.

Total delivery size: approximately 100-120 GB per genome.

## 3.3 What PrivDNA Does Not Do

PrivDNA explicitly does not:

- **Interpret results.** We do not provide medical advice, diagnoses, risk assessments, or health recommendations. We provide raw data.
- **Retain data.** After delivery and witnessed destruction, no copy of the customer's genomic data exists on PrivDNA premises.
- **Use cloud services.** No data leaves the air-gapped server via any network connection. There is no AWS, no Azure, no DNAnexus, no cloud platform of any kind.
- **Sell or license data.** There is no database to monetize because there is no database.
- **Communicate results to third parties.** The customer is the sole recipient. We do not report to insurers, employers, law enforcement, or researchers.

## 3.4 The Open Source Commitment

All custom software developed for PrivDNA's operations is published as open source:

- **Bioinformatics pipeline** (Nextflow/GATK/BWA-MEM2 wrapper): MIT License
- **Chain-of-custody tracking system**: MIT License
- **Customer-facing pipeline status dashboard**: MIT License
- **Data destruction verification tooling**: MIT License

This commitment serves dual purposes. First, it provides cryptographic assurance to customers -- they can verify that the code processing their DNA does exactly and only what it claims to do. Second, it builds community trust and positions PrivDNA as a public good contributor to the genomics ecosystem, a significant brand differentiator.

Publishing our pipeline eliminates the code itself as a competitive moat, deliberately. Our moat is physical infrastructure, brand trust, regulatory certifications, and the NYC location -- assets that cannot be cloned from a GitHub repository. A competitor can fork the pipeline; they cannot fork a CLIA/CLEP-certified glass-walled laboratory with an established customer base and referral network.

---

# IV. MARKET ANALYSIS

## 4.1 Total Addressable Market

**Consumer Genomics (Global):** $2.51 billion (2024), projected to reach $8.17 billion by 2030 at a 21.73% CAGR ([360iResearch](https://www.360iresearch.com/library/intelligence/consumer-genomics) — cited figures from the 2025 edition; the live report is refreshed periodically).

**Whole Genome Sequencing (Global):** $2.12 billion (2024), projected to reach $6.67 billion by 2030 at a 22.17% CAGR ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/whole-genome-sequencing-market-report)).

**Direct-to-Consumer Genetic Testing (Global):** the $1.95 billion (2024) → $9.57 billion (2034) at 17.9% CAGR figure originally cited from Precedence Research **[needs review]** — Precedence's current [consumer genomics page](https://www.precedenceresearch.com/consumer-genomics-market) shows different numbers; re-source before relying on this claim.

## 4.2 Serviceable Addressable Market

PrivDNA's initial SAM is defined by:

- **Geography:** New York City metropolitan area (~19.9M, [ACS 2024 1-year estimates](https://www.census.gov/programs-surveys/acs/data.html) for MSA 35620)
- **Demographics:** Health-conscious adults aged 25-65 with household income >$150,000 (approximately 3.2 million in the NYC metro area, derived from ACS tables B01001 and B19001)
- **Privacy sensitivity:** The 60% of this demographic who [express some willingness to pay a premium](https://www.statista.com/statistics/1469800/us-adults-willingness-to-pay-for-personal-data-protection/) for data protection (Statista / CivicScience, 2024) -- approximately 1.92 million individuals
- **WGS interest:** Estimated 5-10% of privacy-sensitive high-income consumers who would consider WGS in a given year -- approximately 96,000-192,000 individuals

## 4.3 Serviceable Obtainable Market

Given PrivDNA's single-location capacity (~750 genomes/year at full utilization with realistic maintenance) and realistic market penetration for a new brand:

- **Year 1 target:** 200 genomes (0.1-0.2% of addressable)
- **Year 2 target:** 480 genomes (0.3-0.5% of addressable)
- **Year 3 target:** 720 genomes (0.4-0.8% of addressable)
- **Year 5 target:** 750 genomes (at single-instrument capacity)

### Target Customer Profiles

PrivDNA's addressable market is defined by four primary customer personas, validated through demographic analysis of the NYC metropolitan area (ACS 2024, Pew Research 2023, Deloitte 2025).

**The Privacy Hawk.** Age 35-50, household income $200,000-$500,000, graduate-educated professionals in technology security, law, or finance. This persona uses encrypted messaging, VPNs, and privacy-focused browsers -- and applies the same rigor to genomic data. The 23andMe bankruptcy was a catalytic event. They will audit PrivDNA's open-source pipeline on GitHub before booking an appointment. Price is not a significant barrier; the $3,500 is justified by conviction. Estimated addressable population in the NYC metro: approximately 2,600-5,200 annually (adults 35-50 in the top decile of privacy sensitivity, with household income above $200,000 and 5-10% annual WGS consideration). Expected referral rate: 2-4 per customer within 12 months.

**The Health Optimizer.** Age 30-50, household income $250,000-$1,000,000+, already spending $5,000-$25,000+ annually on concierge medicine, executive physicals, longevity clinics, and supplements. WGS is the foundational dataset for their health optimization stack -- pharmacogenomics, polygenic risk scores, carrier status, and preventive planning. Privacy is a value-add rather than the primary motivator. Discovery typically comes through a concierge physician, longevity podcast, or peer recommendation. Estimated addressable population: approximately 6,500-13,000 annually (10-20% consideration rate, higher than average due to active health optimization behavior). Expected referral rate: 3-5 per customer, with high family package conversion potential.

**The Informed Parent.** Age 28-42, household income $150,000-$400,000, dual-professional households planning pregnancy or with young children. Standard expanded carrier panels test 100-500 conditions via targeted sequencing; WGS captures the complete genome -- 6.4 billion base pairs per couple -- including rare and novel variants that panels miss. For couples investing $20,000-$50,000+ in IVF, adding $7,000 for the most comprehensive genetic picture is a rational decision. The privacy dimension is acute: GINA does not cover life, disability, or long-term care insurance, making a child's genome in a company database a quantifiable long-term risk. Estimated addressable population: approximately 3,900-7,800 annually (representing 2,000-4,000 purchasing units buying two genomes each). Expected referral rate: 3-5 couple referrals per unit within 12 months.

**The Tech Executive.** Age 38-55, household income $500,000-$5,000,000+, CISOs, CTOs, managing directors, and general partners who apply enterprise-grade data hygiene standards to their personal information. This persona evaluates PrivDNA's FIPS 140-3 certification, air-gap architecture, and NIST destruction protocol with the same rigor they apply to vendor security audits. Price is immaterial at this income level; family packages of 2-4 genomes ($7,000-$14,000) are common. Estimated addressable population: approximately 6,000-12,000 annually (10-20% consideration rate reflecting above-average privacy awareness). Expected referral rate: 4-8 per customer -- the highest-leverage persona, operating in concentrated executive networks (YPO, board dinners, country clubs).

**Demand funnel.** Applying progressive filters to the NYC metro population: 20.1 million total population, narrowed to approximately 11.5 million adults aged 25-65, then to approximately 3.2 million with household income above $150,000, then to approximately 1.92 million who are privacy-sensitive (60%, Statista 2024), then to approximately 96,000 who are WGS-interested (5-10% of the privacy-sensitive segment aware of and considering WGS), then to approximately 14,400 willing to pay $3,500+ for privacy-sovereign WGS (15%), then to approximately 10,000 within practical travel distance of Manhattan (70%), yielding an estimated 200-500 annual purchasers at a 2-5% first-year conversion rate.

**B2B channels.** Two institutional channels are projected to grow from approximately 25% of Year 1 volume to 35% by Year 3. Concierge medicine referrals are the highest-leverage channel: an estimated 200+ concierge practices in the NYC metro area, each with patient panels of 50-600 individuals in the target demographic; 50 active referral practices producing an average of 12 genomes per year would yield 600 genomes annually -- exceeding the Year 1 target of 200 by 3x. Family offices (200+ single-family offices in the NYC metro, the highest concentration globally) represent a second high-value channel, with average engagements of 4-8 genomes per family at $12,800-$25,600 per engagement (at institutional pricing of $3,200/genome).

## 4.4 Competitive Landscape

### The Market Has Two Tiers

**Tier 1: SNP Genotyping (Low Resolution)**
23andMe and Ancestry dominate this tier with SNP microarray tests at $99-$229. These tests examine 600,000-700,000 specific genetic markers -- less than 0.02% of the genome. They serve casual ancestry curiosity and basic trait analysis.

**Tier 2: Whole Genome Sequencing (Full Resolution)**
WGS reads the complete 3.2 billion base pairs of the human genome. This tier is served by [Sequencing.com](https://sequencing.com) ($399), [Nucleus Genomics](https://mynucleus.com) ($399 + $39/year membership), and [Dante Labs](https://dantelabs.com) ($599, frequently discounted to ~$499). Nebula Genomics shut down its consumer service on February 5, 2025 and faces a federal class-action privacy lawsuit ([*Portillo v. Nebula Genomics*](https://www.classaction.org/media/portillov-nebula-genomics-inc-et-al.pdf)) alleging it shared genetic data with Meta, Google, and Microsoft via embedded tracking tools; its parent company [ProPhase Labs filed Chapter 11](https://ir.prophaselabs.com/news-events/press-releases/detail/250/prophase-labs-inc-announces-completion-of-important-next) for its COVID-19 testing laboratory subsidiaries in September 2025. Dante Labs' UAE subsidiary (Dante Labs Genomics FZE) was [acquired by Bio Cell Tech FZCO](https://www.clydeco.com/en/about/news/2024/12/advising-bio-cell-tech) in February 2025. All active competitors operate via mail-order.

### Competitive Comparison Matrix

| Feature | 23andMe | Ancestry | Nebula (defunct) | Nucleus | Dante Labs | **PrivDNA** |
|---------|---------|----------|--------|---------|------------|-------------|
| Data type | SNP array | SNP array | 30x WGS | 30x WGS | 30x WGS | **30x WGS** |
| Price | $99-$229 | $99-$119 | $249-$299 (closed Feb 2025) | $399 | $599 | **$3,500** |
| Physical storefront | No | No | No | No | No | **Yes** |
| Glass-walled lab | No | No | No | No | No | **Yes** |
| Air-gapped processing | No | No | No | No | No | **Yes** |
| Open source pipeline | No | No | Partial | No | No | **Yes** |
| Data retention | Indefinite | User-controlled | Indefinite | 60-day sample | 10 years | **Zero** |
| Witnessed destruction | No | No | No | No | No | **Yes** |
| Live technical representative | No | No | No | No | No | **Yes** |
| FIPS 140-3 encrypted delivery | No | No | No | No | No | **Yes** |

### Competitor Deep-Dive: Strengths and Weaknesses

The three active WGS competitors each present a distinct competitive profile -- and a distinct set of vulnerabilities.

**Sequencing.com** ($399, founded 2014, [$5M Series A](https://www.genomeweb.com/sequencing/sequencingcom-raises-5m-private-funding)) is the most polished DTC WGS platform, with 688 Trustpilot reviews, an app marketplace of 100+ analysis tools, and turnaround options ranging from 10 weeks to 2-3 weeks (ultra rapid). Its primary weakness is a critical privacy gap: the "SequencingAI" feature shares customer genetic data with third-party AI services including OpenAI, which "may retain some data for an indefinite period of time" per the company's [AI Use Policy](https://sequencing.com/policies/ai-use-policy) -- directly contradicting its "Privacy Forever" branding. Recurring customer complaints center on auto-enrollment in a $30/month subscription plan without clear consent at purchase.

**Nucleus Genomics** ($399 + $39/year, founded 2020, $32M total raised including a [$14M Series A in January 2025](https://techcrunch.com/2025/01/30/controversial-genetics-testing-startup-nucleus-genomics-raises-14m-series-a/)) reports aggressive month-over-month revenue growth [founder-cited, not independently verified] and has expanded into embryo selection ($5,999). However, the company faces serious credibility concerns: allegations of fabricating customer reviews, [formal criticism from the American College of Medical Genetics and Genomics](https://www.gimjournal.org/article/S1098-3600(23)01068-7/fulltext) regarding polygenic-risk-score embryo products' evidence base, and a founder who has been compared to Elizabeth Holmes by critics. Independent research continues to find that polygenic scores -- central to the Nucleus Embryo product -- include significant statistical uncertainty and yield inconsistent predictions across methods ([Sun et al., *Nature Human Behaviour*, 2024](https://www.nature.com/articles/s41562-024-02019-y); see also [Turley et al., *NEJM*, 2021](https://www.nejm.org/doi/full/10.1056/NEJMsr2105065)). Physical DNA samples are destroyed within 60 days, but digital data retention periods are vaguely defined as "determined by business need."

**Dante Labs** ($599, frequently discounted to ~$499; its UAE subsidiary Dante Labs Genomics FZE was [acquired by Bio Cell Tech FZCO](https://www.clydeco.com/en/about/news/2024/12/advising-bio-cell-tech) in February 2025) holds an [**F rating from the Better Business Bureau**](https://www.bbb.org/us/ny/new-york/profile/dna-testing/dante-labs-inc-0121-176749) with dozens of complaints logged in the prior 12 months (counts fluctuate). Customer reports consistently describe delivery failures (6-10+ months, with some customers never receiving results), non-responsive customer service, and hidden charges for raw data downloads. Labs operate in Italy and Dubai, not domestically. The 10-year data retention policy post-account-deletion and new UAE ownership raise data sovereignty concerns.

**Lessons from failures.** The DTC genomics sector has produced a consistent failure pattern. Nebula Genomics (shut down February 2025) marketed itself as "privacy-first" with blockchain-based data ownership, but a [federal class-action lawsuit](https://www.classaction.org/media/portillov-nebula-genomics-inc-et-al.pdf) alleges it shared genetic data with Meta, Google, and Microsoft via embedded tracking pixels -- the ultimate privacy theater. [Veritas Genetics ceased US operations in December 2019](https://www.cnbc.com/2019/12/05/veritas-genetics-to-cease-us-operations-talks-with-buyers.html) after Chinese investors triggered CFIUS scrutiny; consumer volume remained low at $599 pricing, suggesting weak demand even at sub-$1,000 price points. Every low-price DTC WGS model has either failed (Nebula, Veritas), gone bankrupt (23andMe, Invitae), or pivoted entirely to B2B (Helix, Color Health).

**Adjacent competition.** Concierge medicine and executive health programs ([Fountain Life at $10,500-$21,500/year](https://www.fountainlife.com/membership), [Human Longevity Inc. at $8,000/year](https://www.humanlongevity.com/executive-health/)) offer WGS as a bundled component of comprehensive diagnostic packages. This data is retained indefinitely in the clinical record. PrivDNA's $3,500 standalone service is priced below every concierge WGS alternative while offering superior privacy guarantees -- positioning it as the affordable premium option for customers who want genomic data outside their medical record.

PrivDNA sequences on the **Element Biosciences AVITI**, which uses avidity sequencing (sequencing-by-binding) rather than Illumina's sequencing-by-synthesis. The output quality is comparable (≥90% bases above Q30) and produces identical standard file formats (FASTQ, BAM, VCF), making it fully interchangeable for downstream analysis. Element's reagent price guarantee for the instrument's lifetime eliminates the single largest variable cost risk for the business.

### The Whitespace

**No existing competitor offers a physical, in-person genomics experience.** The entire DTC genomics market operates via mail-order saliva kits. There is no "retail DNA testing storefront" in operation from any established player. This is distinct from WGS offered as a component of concierge medicine or executive health programs, where sequencing is typically outsourced to external labs and data is retained in the clinical record.

PrivDNA occupies a category of one: a premium, physically transparent, cryptographically verifiable, zero-retention genomics service. The $3,500 price point is justified not by the sequencing itself (commodity) but by the infrastructure, trust architecture, and experience surrounding it.

## 4.5 The Privacy Premium

Quantitative evidence supports premium pricing for privacy:

- 60% of U.S. adults [express some willingness to pay a premium](https://www.statista.com/statistics/1469800/us-adults-willingness-to-pay-for-personal-data-protection/) for companies with strong data protection (Statista / CivicScience, 2024)
- Consumers who view their tech providers as excelling in both innovation and data responsibility spend **62% more annually on tech devices** compared to consumers who rate providers as lagging on both dimensions ([Deloitte, 2025](https://www.deloitte.com/us/en/insights/industry/telecommunications/connectivity-mobile-trends-survey.html))
- In a [PLOS ONE study (Briscoe et al., 2020, n=2,020)](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0229044), 37.8% of respondents stated they would not provide genetic data at any price, and 50.6% would provide it only with financial compensation

The top three policies that increase consumer willingness to share genetic data are: (1) ability to request data deletion, (2) assurance data would not be sold or shared, and (3) specific permissions required for reuse. PrivDNA's model satisfies all three by design.

### Pricing Context

The $3,500 price point is best understood not as a premium over commodity WGS, but as the lowest-cost entry in the premium health services category over any meaningful time horizon.

**Price anchoring.** Executive physicals at major academic medical centers cost $5,000-$11,000 annually (Mayo Clinic, Cleveland Clinic). Concierge medicine retainers average $2,500-$3,000 per year, with premium practices charging $10,000-$50,000 per year. Fountain Life's longevity membership costs $10,500-$21,500 annually; Human Longevity Inc.'s executive health program starts at $8,000 per year. Unlike every service in this comparison set, PrivDNA is a single, non-recurring expenditure that produces a lifetime dataset. Over two or more years, $3,500 is the cheapest option in a premium health portfolio.

**The $399 vs. $3,500 reframing.** These are not different prices for the same product -- they are different products. At $399, a customer receives whole genome sequencing data that lives indefinitely on a company's servers, accessible to AI partners (Sequencing.com shares data with OpenAI per its AI Use Policy), third-party app developers, and future acquirers in bankruptcy proceedings. At $3,500, a customer receives the same sequencing data on an encrypted drive they physically possess -- processed on an air-gapped server, delivered through a witnessed chain of custody, and destroyed on-premise under NIST SP 800-88 standards. The $3,100 difference is the cost of ensuring that the most sensitive data a person will ever generate exists in exactly one place: their hands.

**Loss aversion.** Kahneman and Tversky's prospect theory establishes that losses are psychologically approximately twice as powerful as equivalent gains -- a finding replicated across 19 countries (Columbia University, 2020). Genomic data amplifies loss aversion through three properties: irreversibility (a compromised genome cannot be changed), familial scope (one person's data partially reveals the genomes of every biological relative), and temporal scope (future analytical capabilities will extract information from today's data that cannot currently be predicted). The loss of genomic privacy is permanent, generational, and expanding.

**Pricing.** PrivDNA's price is $3,500 per genome, a single price across all individual customers. Family packages at $3,100-$3,250 per genome (two or more genomes purchased together) and B2B institutional pricing at $3,000-$3,200 per genome (for concierge practices, family offices, and corporate programs) provide structured volume pricing without tiered privacy guarantees -- the security architecture is identical regardless of price.

---

# V. TECHNICAL ARCHITECTURE

## 5.1 Sequencing Platform

**Primary instrument: [Element Biosciences AVITI](https://www.elementbiosciences.com/products/aviti)**

| Specification | Value |
|--------------|-------|
| Chemistry | Avidity sequencing (rolling circle amplification + sequencing-by-binding) |
| Flow cell | Cloudbreak 300-cycle kit (2x150 bp) |
| Output per run | ~300 GB (sufficient for ~3 genomes at 30x) |
| Quality | ≥90% bases above Q30 |
| Run time (2x150 bp) | ~38 hours |
| Instrument price | $289,000 |
| Basecalling / demux | bases2fastq (Element Biosciences) -- produces standard FASTQ |
| Company | Element Biosciences (founded 2017, San Diego; AVITI launched 2022) |

The Element AVITI is the optimal platform for PrivDNA's volume tier. It delivers clinical-grade sequencing quality at a significantly lower reagent cost than competing platforms: the Cloudbreak 300-cycle kit costs $1,680 per run ($560 per genome at 3 genomes per run), and Element guarantees no reagent price increases for the instrument's lifetime -- eliminating the single largest variable cost risk. At ~38-hour run cycles and realistic maintenance and library prep schedules, a single AVITI can process approximately 3-4 runs per week, yielding 9-12 genomes per week or 40-52 genomes per month. With overlapping batches (starting next library prep while the current run is active), throughput of 50-65 genomes per month is achievable.

The AVITI produces standard FASTQ output, making it fully compatible with the entire downstream open-source pipeline (BWA-MEM2, GATK, Parabricks). NVIDIA Clara Parabricks supports AVITI data as of v4.5 via standard FASTQ input.

### Supporting Laboratory Equipment

| Equipment | Model | Purpose | Estimated Cost |
|-----------|-------|---------|---------------|
| DNA quantification | Thermo Fisher Qubit 4 | Fluorometric DNA concentration measurement | $4,000 |
| Fragment analysis | Agilent TapeStation 4150 | Library size distribution QC | $16,000 |
| Thermal cycler | Bio-Rad T100 | PCR amplification during library prep | $3,500 |
| Centrifuge | Eppendorf 5810R | Plate spinning, sample pelleting | $6,000 |
| Pipettes (single-channel set + multichannel) | Eppendorf Research Plus | Manual liquid handling | $3,200 |
| Vortex mixer | Various | Sample mixing | $500 |
| Microcentrifuge | Eppendorf 5424R | Tube spinning | $3,500 |

## 5.2 Air-Gapped Compute Stack

All bioinformatics processing occurs on a dedicated, air-gapped server that has no network interface capable of reaching the internet. The server communicates only with the Element AVITI sequencer via a physically isolated local network segment.

### Server Specifications

| Component | Specification | Part Number |
|-----------|--------------|-------------|
| CPUs | 2x AMD EPYC 9654 (96-core/192-thread, 2.4/3.7 GHz, 384 MB L3) | 100-000000789 |
| Chassis | Supermicro AS-2125HS-TNR (2U, 24x NVMe hot-swap) | AS-2125HS-TNR |
| RAM | 1 TB DDR5-4800 ECC RDIMM (16x 64 GB Samsung) | M321R8GA0BB0-CQK |
| Storage | 30 TB usable (8x Samsung PM9A3 7.68 TB NVMe, RAID-10) | MZQL27T6HBLA-00A07 |
| GPU | NVIDIA L40S 48 GB PCIe (Parabricks acceleration) | L40S-48GB |
| TPM | Supermicro TPM 2.0 (Infineon SLB9670) | AOM-TPM-9670V |

The NVIDIA L40S GPU enables NVIDIA Clara Parabricks acceleration, reducing the full WGS pipeline (alignment through variant calling) from 8-16 hours on CPU alone to approximately 60-90 minutes on GPU-accelerated paths. NVIDIA recommends the L40S for Parabricks workloads; while processing time is longer than the A100 (60-90 min vs. 30-45 min), it is well within SLA requirements and reduces GPU CAPEX from $13,000 to $7,500.

### Network Isolation

| Component | Model | Purpose |
|-----------|-------|---------|
| Managed switch | Cisco Catalyst 1000 C1000-8T-2G-L | VLAN isolation between sequencer and compute server |
| Firewall | Netgate 6100 MAX (pfSense+) | Configured with no default gateway; all WAN interfaces disabled |

The air gap is enforced at multiple layers:
1. **Physical:** No Ethernet cable connects the isolated network to any internet-connected network. Wi-Fi and Bluetooth adapters are not installed.
2. **Logical:** The firewall has no WAN configuration. VLAN isolation separates the sequencer subnet from the compute subnet.
3. **BIOS-level:** USB boot and PXE boot are disabled. BIOS is password-protected. Secure Boot is enabled.
4. **Port control:** Physical USB port blockers (SmartKeeper) on all unused ports. A single controlled transfer workstation handles data export to encrypted USB drives.

### AVITI Sequencer Isolation

The Element Biosciences AVITI is configured for fully local operation:

- **ELMS configured for local-only output:** The AVITI's management software (Element Laboratory Management System) is configured for local-only output with no cloud connectivity. No run data is transmitted to any external platform.
- **Local output only:** Sequencer output is configured to write exclusively to a local SMB/NFS share on the isolated VLAN. The compute server mounts this share as the sole data destination.
- **Firewall enforcement:** All outbound traffic from the sequencer's IP address is blocked at the Netgate firewall. No DNS resolution, no NTP synchronization to external servers, and no HTTPS connections to external endpoints are permitted.
- **Element field service confirmation:** Prior to deployment, Element Biosciences field service engineering will confirm that the AVITI operates in local-output-only mode without requiring internet check-ins for continued operation. Instrument software updates are applied offline via USB media during scheduled maintenance windows.

## 5.3 Open Source Bioinformatics Pipeline

The pipeline processes raw sequencer output into analysis-ready genomic data using exclusively open-source tools:

### Pipeline Stages

```
Stage 1: Basecalling & Demultiplexing
  AVITI run output -> bases2fastq (Element Biosciences) -> FASTQ (R1 + R2 per sample)
  -> FastQC v0.12.1 (per-sample quality control)

Stage 2: Alignment
  FASTQ -> BWA-MEM2 v2.2.1 (alignment to GRCh38 reference) -> Unsorted BAM

Stage 3: BAM Processing
  Unsorted BAM -> samtools v1.23.1 (coordinate sort)
  -> GATK v4.6.1.0 MarkDuplicates (duplicate removal)
  -> samtools index (.bai generation)

Stage 4: Base Quality Score Recalibration
  Sorted BAM + known variant sites (dbSNP, Mills, known indels)
  -> GATK BaseRecalibrator -> GATK ApplyBQSR -> Analysis-ready BAM

Stage 5: Variant Calling
  Analysis-ready BAM -> GATK HaplotypeCaller (-ERC GVCF mode)
  -> Per-sample gVCF

Stage 6: Genotyping & Hard Filtering
  gVCF -> GATK GenotypeGVCFs -> Raw VCF
  -> GATK VariantFiltration (hard filters per GATK best practices) -> Filtered VCF
  Note: VQSR (Variant Quality Score Recalibration) requires cohorts of ~30+
  samples to build a reliable statistical model and is not suitable for
  single-sample workflows. Hard filtering with GATK recommended thresholds
  (QD, FS, MQ, MQRankSum, ReadPosRankSum, SOR) is the standard approach
  for single-sample WGS. The nf-core/sarek pipeline handles this correctly.

Stage 7: Quality Aggregation
  All outputs -> MultiQC v1.33 -> Aggregate HTML quality report
```

### Pipeline Orchestration

The pipeline is orchestrated via **[Nextflow](https://www.nextflow.io/)** using the **[nf-core/sarek](https://nf-co.re/sarek)** framework -- a production-validated, community-maintained WGS/WES analysis pipeline. Sarek is the most battle-tested open-source WGS pipeline available, with contributions from dozens of institutions worldwide.

For air-gapped deployment, all dependencies are pre-staged as Singularity container images (.sif files) on an internet-connected staging machine, then transferred to the air-gapped server via encrypted physical media. The total software + reference data package is approximately 80-100 GB.

### Reference Genome and Resources

| Resource | Size |
|----------|------|
| GRCh38 reference FASTA | ~3.3 GB |
| BWA-MEM2 index | ~30 GB |
| GATK resource bundle (dbSNP, HapMap, 1000G, Mills) | ~15-20 GB |
| **Total reference data** | **~50-60 GB** |

### Performance (Per 30x Genome)

| Stage | Tool | Wall Time (CPU) | Wall Time (GPU-accelerated) |
|-------|------|-----------------|---------------------------|
| Basecalling & demux | bases2fastq | 30-60 min | N/A |
| QC | FastQC | 10-20 min | N/A |
| Alignment | BWA-MEM2 | 2-4 hours | ~15-20 min (Parabricks/L40S) |
| Sort + dedup | samtools + GATK | 1-2 hours | ~8-10 min (Parabricks/L40S) |
| BQSR | GATK | 1-2 hours | ~8-10 min (Parabricks/L40S) |
| Variant calling | HaplotypeCaller | 3-6 hours | ~15-20 min (Parabricks/L40S) |
| **Total** | | **8-16 hours** | **~60-90 min** |

### Storage Requirements Per Genome

| Stage | Size | Retention |
|-------|------|-----------|
| Raw sequencer output (shared per run) | 200-300 GB per run | Deleted after FASTQ generation |
| FASTQ (compressed) | 60-90 GB | Deleted after BAM validation |
| Analysis-ready BAM + index | 80-100 GB | Delivered to customer, then destroyed |
| gVCF | 5-10 GB | Delivered to customer, then destroyed |
| Final VCF | ~1 GB | Delivered to customer, then destroyed |
| QC reports | ~50 MB | Delivered to customer, then destroyed |
| **Peak working storage** | **~400-500 GB** | During processing only |

With 30 TB usable storage (RAID-10), the server provides approximately 3x the peak working requirement for a single run (3 genomes at ~1.5 TB peak). This comfortably supports the operational throughput of one run at a time with full intermediate files, plus reference data and software (~100 GB). The right-sized storage array reduces CAPEX by ~$78,000 compared to a 24-drive configuration while maintaining ample headroom for concurrent processing.

## 5.4 Data Destruction Protocol

PrivDNA follows [NIST SP 800-88 Revision 2 (September 2025)](https://csrc.nist.gov/pubs/sp/800/88/r2/final) -- the current authoritative standard for media sanitization, which supersedes the legacy DoD 5220.22-M standard.

### Method: Cryptographic Erasure (Purge Level)

All NVMe drives in the server array are **self-encrypting drives (SEDs)** with AES-256 encryption enabled from initial deployment. Data destruction proceeds as follows:

1. **Verification:** Confirm all deliverables have been transferred to the customer's encrypted USB drive and validated via SHA-256 checksums.
2. **Cryptographic erasure:** The drive controller generates a new random Data Encryption Key (DEK), permanently discarding the old key. All previously written data becomes cryptographically irrecoverable.
3. **Completion time:** Under 5 seconds per drive, regardless of capacity.
4. **Verification:** Post-erasure read verification confirms no recoverable data patterns.
5. **Documentation:** Certificate of Destruction generated with media serial numbers, method, timestamp, technician ID, and verification results.

Cryptographic erasure is superior to overwrite-based methods for NVMe/SSD media because it reaches all data including wear-leveling reserves and over-provisioned blocks that overwrite methods cannot access.

### End-of-Life Media Handling

When drives reach end of service life, they undergo **physical destruction** (NIST SP 800-88 "Destroy" level) via shredding through a certified media destruction vendor.

---

# VI. FACILITY DESIGN AND CUSTOMER EXPERIENCE

## 6.1 Space Requirements

PrivDNA requires approximately 1,200 square feet of commercial space divided into four zones:

| Zone | Size | Purpose |
|------|------|---------|
| Customer reception and consultation area | ~350 sq ft | Walk-in reception, Genomic Concierge desk, seating, branding |
| Glass-walled laboratory | ~500 sq ft | Sequencer, sample prep benches, server rack, QC equipment |
| Secure server room (within lab) | ~100 sq ft | Air-gapped compute server, UPS, environmental controls |
| Staff area and storage | ~250 sq ft | Consumables storage, staff workspace, restroom |

## 6.2 The Glass Wall

The defining physical feature of PrivDNA is a **floor-to-ceiling tempered glass partition** (~20 linear feet) separating the customer area from the laboratory. Design specifications:

- **Material:** Tempered safety glass, minimum 12 mm thickness
- **Clarity:** Low-iron glass for maximum transparency (no green tint)
- **Sealing:** Silicone-sealed to maintain lab pressure differential and prevent contamination
- **Labeling:** Etched or applied labels identifying each piece of equipment visible through the glass (sequencer, server rack, QC station)
- **Estimated cost:** $18,000-$25,000 installed (NYC union labor rates)

The glass wall serves a dual purpose:
1. **Trust architecture:** Customers see their sample being collected and barcoded at intake, and watch their data being destroyed in real time at the delivery visit. The intervening sequencing and bioinformatics happen on equipment visible through the glass -- but at a timescale (hours to days) that is verified through the open-source pipeline rather than watched live.
2. **Marketing:** The visible laboratory creates an experiential retail environment unlike any other genomics service -- a "theater of science" that generates organic social media attention and word-of-mouth.

## 6.3 Customer Journey

**The customer experience is two brief visits spanning 4-6 business days. Visit 1 (~25 minutes total) covers intake and sample collection. The customer then departs. Between visits, the lab completes DNA extraction, library preparation, a ~38-hour sequencing run, and ~60-90 minutes of bioinformatics processing -- all visible through the glass wall to anyone physically in the lobby, but not watched live by the customer. Visit 2 (~30 minutes) covers data delivery and witnessed destruction.**

### Visit 1: Intake and Sample Collection (~25 minutes total)

#### Step 1: Walk-In or Appointment (~15 minutes)
The customer enters the storefront and is greeted by the Genomic Concierge. The concierge explains the process, answers questions about sequencing technology and privacy protocols, and guides the customer through consent documentation.

#### Step 2: Sample Collection (~10 minutes)
A trained laboratory technician collects a saliva or buccal swab sample using a standard collection kit. The sample is labeled with a unique barcode in view of the customer. The customer then departs; the remaining processing happens between visits.

### Between Visits: Lab Processing (4-6 business days)

#### Step 3: DNA Extraction and Library Preparation (~2-4 hours)
The technician extracts DNA, checks quality (Qubit quantification, TapeStation fragment analysis), and prepares a sequencing library using NEBNext Ultra II FS DNA Library Prep chemistry. This process occurs after the customer departs and is visible through the glass wall to any customers physically present in the lobby.

#### Step 4: Sequencing (~38 hours)
The library is loaded onto an Element Biosciences AVITI Cloudbreak flow cell. The sequencing run takes approximately 38 hours. The customer is notified when the run completes.

#### Step 5: Bioinformatics Processing (~60-90 minutes)
The air-gapped server processes raw sequencer data through the open-source pipeline. With GPU acceleration (NVIDIA L40S), this step completes in approximately 60-90 minutes. A CPU-only fallback takes 8-16 hours. The customer does not need to be present.

### Visit 2: Data Delivery and Witnessed Destruction (~30 minutes)

#### Step 6: Handoff and On-Site Destruction
The customer returns to the storefront. The concierge walks them through the results package on their encrypted USB drive, verifying SHA-256 checksums. The customer then witnesses the data destruction process through the glass wall. They receive:
- Their encrypted USB drive (FIPS 140-3 Level 3 certified)
- A printed Certificate of Destruction
- A referral packet for partner genetic counseling services

### Total Turnaround: 4-6 Business Days

## 6.4 The Genomic Concierge

The Technical Representative ("Genomic Concierge") is the face of PrivDNA's privacy guarantee and the most customer-facing hire.

**Required Profile:**
- B.S. or M.S. in Molecular Biology, Genetics, Genomics, or related life science field
- Minimum 2 years of customer-facing experience (former lab tech, science educator, genetic counseling assistant)
- Strong communication skills -- ability to translate complex genomics and cybersecurity concepts into accessible language
- Comfort with public-facing role (this is a retail position, not a back-office role)

**Responsibilities:**
- Greet customers and explain the end-to-end process
- Narrate lab activities visible during each customer visit, and walk customers through what happened between visits via the open-source pipeline
- Explain the air-gap security model, open-source pipeline, and data destruction protocols
- Manage the data handoff ceremony (encrypted USB delivery + witnessed destruction)
- Handle customer questions and referrals to partner interpretation services
- Conduct small-group educational sessions or media tours as needed

---

# VII. REGULATORY AND COMPLIANCE FRAMEWORK

## 7.1 Federal Requirements

### CLIA Certification

Clinical laboratory testing in the United States requires certification under the [Clinical Laboratory Improvement Amendments (CLIA)](https://www.cms.gov/medicare/quality/clinical-laboratory-improvement-amendments/regulations-federal-register), administered by CMS under [42 CFR Part 493](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-493). Whole genome sequencing is classified as **high-complexity** testing -- the highest CLIA category.

**Process:**
1. Submit CMS-116 application to the NYSDOH (state survey agency for New York)
2. Receive Certificate of Registration (temporary; allows testing to begin)
3. Undergo state survey/inspection
4. Receive Certificate of Compliance

**Lab Director Requirements (42 CFR 493.1443):**
The lab director for a high-complexity CLIA lab must hold either:
- An M.D. or D.O. licensed in New York, OR
- A doctoral degree in a relevant laboratory science, PLUS board certification by an HHS-approved board (e.g., ABB's HCLD certification), PLUS at least 1 year of laboratory training/experience

**Fees:** ~$223 biennially for low-volume labs (Schedule A: 3 or fewer specialties, 2,001-10,000 tests/year)

**Timeline:** Certificate of Registration in 2-4 weeks; full Certificate of Compliance in 3-6 months.

### HIPAA

PrivDNA's cash-pay, no-insurance-billing model may place it outside HIPAA's mandatory scope. Covered entity status under 45 CFR 160.103 depends on whether the entity conducts standard electronic transactions (claims, eligibility inquiries, etc.) -- not on whether it processes health-related data. Because PrivDNA does not bill insurance, does not submit claims, and does not conduct any HIPAA-defined standard transactions, it may not meet the formal covered entity threshold.

**Regardless of formal classification, PrivDNA will voluntarily implement HIPAA-equivalent controls as a matter of policy and brand integrity.** PrivDNA holds itself to a higher standard than the regulatory minimum:

- Privacy Rule equivalent: policies for PHI use, disclosure, and patient rights
- Security Rule equivalent: administrative, physical, and technical safeguards
- Breach Notification Rule equivalent: procedures for breach detection and notification

PrivDNA's air-gapped, zero-retention model **exceeds** HIPAA requirements by design. HIPAA requires data protection for as long as data is held. PrivDNA eliminates the holding period entirely.

## 7.2 New York State Requirements

### NYSDOH Clinical Laboratory Evaluation Program (CLEP)

New York State requires any laboratory testing specimens originating in New York to hold a NYS clinical laboratory permit, administered by the [Wadsworth Center's Clinical Laboratory Evaluation Program](https://www.wadsworth.org/regulatory/clep). This is one of the most stringent state lab oversight programs in the United States and applies **in addition to** federal CLIA certification. (For a practical walkthrough of the LDT validation and approval process for NGS assays, see [Sabnis et al., *J. Mol. Diagn.*, 2025](https://www.jmdjournal.org/article/S1525-1578(25)00067-4/fulltext).)

**Key requirements:**
- Appoint a NYS-certified laboratory director
- Submit standard operating procedures (SOPs) and validation data for all laboratory-developed tests (LDTs)
- NYS considers any non-FDA-approved test method an LDT requiring CLEP review -- this includes WGS, even when producing only raw data
- Pass an on-site inspection by CLEP surveyors before testing begins
- Enroll in proficiency testing (PT) with a CMS-approved provider

**Fees:** $1,100 initial application + $100/year renewal

**Timeline:** 6-12+ months from application to permit issuance. The LDT review process alone can take several months.

**Regulatory basis:** NY Public Health Law Article 5, Title V; [10 NYCRR Subpart 58-1](https://regs.health.ny.gov/content/subpart-58-1-clinical-laboratories)

### NYC Zoning

NYC's ["City of Yes for Economic Opportunity"](https://www.nyc.gov/assets/planning/downloads/pdf/our-work/plans/citywide/city-of-yes-economic-opportunity/zoning-text-modified-by-cpc.pdf) zoning reform (adopted by the City Council June 6, 2024) significantly expanded where laboratories can operate:

- Laboratories are now classified in **Use Group VII** (same as offices)
- **Permitted as-of-right** in all Commercial "C" zones except C3
- A BSL-1 sequencing lab (no significant hazardous chemicals, no fire/explosion risk) fits the permitted definition
- Chelsea, Flatiron, Tribeca, Upper West Side, and Williamsburg all contain qualifying C-district zones
- A Certificate of Occupancy amendment reflecting laboratory use will be required from the NYC Department of Buildings

### NYC Business Registration

- NYS Certificate of Authority (sales tax registration) -- no fee, apply 20 days before operations begin
- Federal EIN from IRS
- NYC employer registration with Department of Finance
- **Sales tax consideration:** NYC combined rate is 8.875%. However, WGS data generated individually for a specific customer likely qualifies as "personal or individual information," which is exempt from NY sales tax. Tax counsel will confirm this determination.

## 7.3 Voluntary Accreditation

### CAP (College of American Pathologists) Accreditation

CAP accreditation is voluntary but functions as CLIA-deemed accreditation status, serves as the industry gold standard for clinical genomics, and is often required by referral partners and payers.

**Process:** Submit application, complete self-inspection against 3,000+ CAP checklist standards, undergo initial on-site peer inspection, then biennial re-inspections.

**Cost:** $2,000-$10,000/year depending on lab size and complexity.

**Timeline:** 6-12 months to initial accreditation.

**Note:** CAP accreditation does not replace CLEP in New York -- both are required.

## 7.4 Liability Structure

PrivDNA's "raw data only" model significantly reduces medical liability exposure:

- **No diagnostic claims:** PrivDNA does not diagnose, interpret, or recommend. Raw data delivery is not a medical act.
- **No covered medical advice:** The Genomic Concierge explains the process and technology but does not discuss health implications of results.
- **Referral insulation:** Partner genetic counselors operate independently under their own licenses and malpractice coverage. PrivDNA's referral relationship does not create joint liability.
- **Insurance:** Professional liability premiums for a non-interpreting sequencing lab are substantially lower than for a clinical diagnostics laboratory.

### GINA Limitations Advisory

The [Genetic Information Nondiscrimination Act (GINA)](https://www.eeoc.gov/statutes/genetic-information-nondiscrimination-act-2008) prohibits discrimination by health insurers and employers based on genetic information. However, per [NHGRI guidance](https://www.genome.gov/about-genomics/policy-issues/Genetic-Discrimination), **GINA does not cover life insurance, disability insurance, or long-term care insurance.** Customers are advised to consult with an attorney before undergoing WGS if they have pending applications for these types of insurance. PrivDNA includes this advisory in its pre-sequencing consent documentation.

---

# VIII. OPERATIONAL PLAYBOOK

## 8.1 Staffing Plan

PrivDNA operates with a lean team designed to fit a single-location, single-instrument throughput of roughly 750 genomes per year:

- **Laboratory Director** (0.25 FTE, contract) — required for CLIA/CLEP certification. Board-certified lab directors can serve up to five labs under CMS rules.
- **Molecular Laboratory Technician** (1.0 FTE) — operates the sequencer, performs sample preparation and QC.
- **Bioinformatics Engineer** (1.0 FTE) — maintains the air-gapped pipeline, handles data processing, manages open-source repositories.
- **Genomic Concierge / Technical Representative** (1.0 FTE) — customer-facing: explains the process, manages handoff, answers questions.
- **Office Manager / QA Coordinator** (1.0 FTE) — front desk, scheduling, consumables ordering, vendor coordination, HR administration, and quality-management documentation (SOPs, CAPA logs, competency records) under Lab Director oversight.

The Office Manager / QA Coordinator bridges two critical gaps: (1) front desk coverage so the Genomic Concierge can focus on in-lab interactions, and (2) compliance/operations documentation that CLIA and CAP require but that would otherwise fall on technical staff.

**Customer consent and withdrawal:** Customers may withdraw consent and request sample destruction at any time before delivery of final results. In such cases, all biological samples and any in-process data are destroyed under the standard NIST SP 800-88 protocol, and the customer receives a Certificate of Destruction. No charge applies if withdrawal occurs before sequencing begins; a partial fee may apply after sequencing has commenced.

## 8.2 Daily Operations

### Sample Processing Workflow

A single Element AVITI with Cloudbreak flow cells operates on a **batch cycle**:

1. **Days 1-2:** Collect samples, extract DNA, prepare libraries (batch of up to 3 samples per flow cell)
2. **Day 2-4:** Load flow cell and begin sequencing run (~38 hours)
3. **Day 4-5:** Sequencing completes; bioinformatics pipeline begins (60-90 min with GPU, 8-16 hrs CPU)
4. **Day 5:** QC review, data transfer to encrypted USB, customer notification
5. **Day 5-6:** Customer pickup, witnessed destruction, certificate generation

At steady state, with overlapping batches (new library prep begins while current run is active), throughput reaches 3-4 runs per week or approximately 9-12 genomes per week (40-52 per month). With optimized batch scheduling, 50-65 genomes per month is achievable.

### Equipment Maintenance

| Task | Frequency | Responsible |
|------|-----------|-------------|
| Sequencer daily maintenance wash | After each run | Lab Technician |
| Flow cell inventory check | Weekly | Lab Technician |
| Server health monitoring (SMART, RAID status) | Daily (automated alerts) | Bioinformatics Engineer |
| UPS battery test | Monthly | Bioinformatics Engineer |
| Environmental monitoring check (temp, humidity) | Daily (automated alerts) | Bioinformatics Engineer |
| Calibration verification | Quarterly | Lab Technician + Director |
| Proficiency testing | Per CLEP/CAP schedule | Lab Director |

## 8.3 Quality Control Program

### Pre-Analytical QC
- DNA concentration verification (Qubit): must meet minimum input requirement for NEBNext Ultra II FS DNA Library Prep
- Fragment size distribution (TapeStation): confirms intact genomic DNA
- Sample identity tracking: barcode scanned at every handoff point

### Analytical QC
- Per-run quality metrics: %Q30 ≥90%, quality metrics within Element AVITI specifications
- Per-sample coverage: minimum 30x mean coverage, <5% of genome below 10x
- Contamination check: VerifyBamID or equivalent to confirm single-source sample

### Post-Analytical QC
- SHA-256 checksum verification of all deliverables
- MultiQC report review before data release
- Lab Director sign-off on each batch

## 8.4 Failure Protocols

| Failure Type | Detection | Response | Customer Impact |
|-------------|-----------|----------|-----------------|
| Library prep failure | Low concentration or poor fragment profile | Re-extract and re-prep from stored sample | 2-3 day delay |
| Sequencing run failure | QC metrics out of spec | Re-sequence with new flow cell | 3-5 day delay |
| Server hardware failure | RAID degradation, SMART alerts | Hot-swap failed drive; rebuild RAID | No delay (RAID-10 tolerates 1 drive loss per mirror) |
| Power failure | UPS alarm | UPS provides 15-30 min runtime; graceful shutdown if extended | Minimal (runs resume) |
| Sample contamination | VerifyBamID or unexpected variants | Re-collect sample from customer | Full restart; no charge for re-run |

---

# IX. REFERRAL PARTNERSHIP MODEL

## 9.1 The Interpretation Problem

PrivDNA intentionally does not interpret genomic data. This is a strategic decision, not a limitation:

1. **Liability reduction:** Medical interpretation triggers clinical diagnostic liability, malpractice insurance requirements, and potentially "covered entity" obligations beyond what raw data delivery requires.
2. **Regulatory simplification:** Interpretive services face additional scrutiny from NYSDOH CLEP and may require additional personnel qualifications.
3. **Focus:** PrivDNA's competitive advantage is in sequencing and privacy, not in genetic counseling. Attempting both would dilute both.

However, customers who receive raw genomic data naturally want to understand what it means. PrivDNA bridges this gap through a structured referral network.

## 9.2 Partner Network Structure

PrivDNA maintains a pre-vetted directory of independent genetic counselors, clinical geneticists, and interpretation service providers. Partners are selected based on:

- **Licensure:** Board-certified genetic counselors (CGCs) or clinical geneticists
- **Independence:** Partners operate under their own professional licenses and liability coverage
- **Privacy alignment:** Partners must demonstrate privacy practices compatible with PrivDNA's philosophy (no data resale, customer-controlled deletion)
- **Geographic accessibility:** NYC-based or telehealth-accessible

### Compensation and Anti-Kickback Structure

PrivDNA does not charge partners for referrals and does not receive referral fees from partners. This preserves the independence of the referral relationship and avoids potential regulatory complications under the federal Anti-Kickback Statute (AKS) and applicable New York State anti-kickback and fee-splitting statutes (NY Education Law Section 6509-a; NY Public Health Law Section 238-a). Because PrivDNA does not bill any federal health care program (Medicare, Medicaid, TRICARE, etc.), the federal AKS may not apply directly, but PrivDNA structures its referral relationships to comply regardless. Referral partners are responsible for their own AKS compliance with respect to their practices.

Instead, the referral network creates value through:

1. **Customer acquisition:** Genetic counselors and clinical geneticists refer patients who want sequencing to PrivDNA
2. **Customer satisfaction:** Customers who can easily access interpretation are more satisfied and more likely to recommend PrivDNA
3. **Brand positioning:** Association with licensed clinical professionals reinforces PrivDNA's credibility despite not offering interpretation directly

## 9.3 Referral Workflow

1. Customer receives their encrypted USB drive from PrivDNA
2. Customer receives a referral packet listing vetted interpretation partners
3. Customer contacts partner directly and shares their data at their own discretion
4. Partner provides interpretation under their own clinical license
5. PrivDNA has no involvement in or visibility into the interpretation process

---

# APPENDIX A: GLOSSARY OF KEY TERMS

| Term | Definition |
|------|-----------|
| **WGS** | Whole Genome Sequencing -- reading the complete 3.2 billion base pairs of the human genome |
| **30x coverage** | Each position in the genome is read an average of 30 times, ensuring high accuracy |
| **BAM** | Binary Alignment Map -- a file format storing sequencing reads aligned to a reference genome |
| **VCF** | Variant Call Format -- a file listing genetic variants (differences from the reference genome) |
| **gVCF** | Genomic VCF -- a comprehensive VCF that includes non-variant positions for completeness |
| **FASTQ** | A text-based format for storing raw sequencing reads with quality scores |
| **GRCh38/hg38** | The current human reference genome assembly (Genome Reference Consortium, build 38) |
| **Air gap** | A physical separation between a computer network and any external network, including the internet |
| **SED** | Self-Encrypting Drive -- a storage device that automatically encrypts all data at the hardware level |
| **FIPS 140-3** | Federal Information Processing Standard for cryptographic module security (Level 3 = highest practical for portable devices) |
| **CLIA** | Clinical Laboratory Improvement Amendments -- federal laboratory certification program |
| **CLEP** | Clinical Laboratory Evaluation Program -- New York State's laboratory oversight program |
| **CAP** | College of American Pathologists -- voluntary laboratory accreditation program |
| **LDT** | Laboratory-Developed Test -- a test designed, manufactured, and used within a single laboratory |
| **HIPAA** | Health Insurance Portability and Accountability Act -- federal health data privacy law |
| **NIST SP 800-88** | National Institute of Standards and Technology Special Publication on media sanitization |
| **BSL-1** | Biosafety Level 1 -- the basic level of containment for work with well-characterized agents not known to cause disease in healthy adults |

---

# APPENDIX B: REGULATORY TIMELINE

| Month | Action |
|-------|--------|
| 0 | Begin CLEP pre-application consultation with Wadsworth Center |
| 1 | Submit CLIA CMS-116 application |
| 1 | Submit CLEP initial application ($1,100) |
| 2 | Execute commercial lease |
| 2-4 | Lab buildout (MEP, glass wall, equipment installation) |
| 3-6 | CLEP LDT validation data development and submission |
| 4 | Receive CLIA Certificate of Registration |
| 5-8 | CLEP on-site survey |
| 6-10 | CLEP permit issuance |
| 8 | Submit CAP accreditation application |
| 10-12 | CAP initial on-site inspection |
| 10 | **Operational launch** (pending CLIA + CLEP approval) |

---

# APPENDIX C: REFERENCES AND SOURCES

Every reference below is a live link to the primary source. A reference audit log is maintained internally; any entry flagged here as **[needs review]** is either (a) attributed to a source that no longer carries the exact figure at that URL, or (b) awaiting a cleaner primary source.

### Market Data
- Grand View Research, [*Whole Genome Sequencing Market Report*](https://www.grandviewresearch.com/industry-analysis/whole-genome-sequencing-market-report) (2025) — $2.12B (2024) → $6.67B (2030), 22.17% CAGR.
- 360iResearch, [*Consumer Genomics Market*](https://www.360iresearch.com/library/intelligence/consumer-genomics) (2025 edition).
- Grand View Research, [*Predictive Genetic Testing and Consumer Genomics Market*](https://www.grandviewresearch.com/industry-analysis/predictive-genetic-testing-consumer-wellness-genomics-market) (2025).
- Direct-to-consumer genetic testing market sizing **[needs review]** — the $1.95B/$9.57B/17.9% figures previously attributed to Precedence Research do not match Precedence's current [consumer genomics page](https://www.precedenceresearch.com/consumer-genomics-market); re-source before relying on this claim.
- U.S. Census Bureau, [American Community Survey](https://www.census.gov/programs-surveys/acs/data.html) 1-year estimates (2024) — NY-Newark-Jersey City MSA (35620); tables B01001 and B19001.

### Privacy and Consumer Sentiment
- Pew Research Center, [*How Americans View Data Privacy*](https://www.pewresearch.org/internet/2023/10/18/how-americans-view-data-privacy/) (October 18, 2023) — 73% little-or-no control over company data use.
- Pew Research Center, [*About Half of Americans Are OK With DNA Testing Companies Sharing User Data With Law Enforcement*](https://www.pewresearch.org/short-reads/2020/02/04/about-half-of-americans-are-ok-with-dna-testing-companies-sharing-user-data-with-law-enforcement/) (February 4, 2020).
- Deloitte, [*2025 Connected Consumer — Innovation with Trust*](https://www.deloitte.com/us/en/insights/industry/telecommunications/connectivity-mobile-trends-survey.html) and associated [press release](https://www2.deloitte.com/us/en/pages/about-deloitte/articles/press-releases/increasing-consumer-privacy-and-security-concerns-in-the-generative-ai-era.html) (2025).
- Statista / CivicScience, [*U.S. Adults Willingness to Pay for Personal Data Protection*](https://www.statista.com/statistics/1469800/us-adults-willingness-to-pay-for-personal-data-protection/) (2024).
- Briscoe F, Ajunwa I, Gaddis A, McCormick J, [*Evolving public views on the value of one's DNA and expectations for genomic database governance*](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0229044), *PLOS ONE* (2020), n=2,020.
- [*Public concerns about direct-to-consumer DNA test kits: the evidence from survey and social media data*](https://www.tandfonline.com/doi/full/10.1080/14636778.2025.2456259), *New Genetics and Society* (Taylor & Francis, March 2025).
- Kahneman D, Tversky A, [*Prospect Theory: An Analysis of Decision under Risk*](https://www.jstor.org/stable/1914185), *Econometrica* 47(2) (1979).
- Ruggeri K, et al., [*Replicating Patterns of Prospect Theory for Decision under Risk*](https://www.nature.com/articles/s41562-020-0886-x), *Nature Human Behaviour* 4 (2020) — 19-country replication, n=4,099.

### 23andMe Collapse and Aftermath
- Farr C, [*DNA testing firm 23andMe to go public through Branson-backed SPAC*](https://www.cnbc.com/2021/02/04/dna-testing-firm-23andme-to-go-public-through-branson-backed-spac.html), CNBC (February 4, 2021).
- Office of the Privacy Commissioner of Canada / UK Information Commissioner's Office, [*Joint investigation of 23andMe, Inc.*](https://www.priv.gc.ca/en/opc-actions-and-decisions/investigations/investigations-into-businesses/2025/pipeda-2025-001/) (2025).
- Kimball S, [*23andMe files for bankruptcy, Anne Wojcicki steps down as CEO*](https://www.cnbc.com/2025/03/24/23andme-files-for-bankruptcy-anne-wojcicki-steps-down-as-ceo.html), CNBC (March 24, 2025).
- Constantino A, [*Regeneron Pharmaceuticals to buy 23andMe for $256 million*](https://www.cnbc.com/2025/05/19/regeneron-pharmaceuticals-to-buy-23andme-for-256-million-including-data.html), CNBC (May 19, 2025).
- Foley Hoag LLP, [*23andMe Bankruptcy Update: How the Proceedings Highlight Best Practices for Handling and Transferring Sensitive Consumer Data*](https://foleyhoag.com/news-and-insights/publications/alerts-and-updates/2025/july/23andme-bankruptcy-update-how-the-proceedings-highlight-best-practices-for-handling-and-transferring/) (July 2025) — $305M TTAM bid, court approval June 30, 2025, close July 14, 2025.
- Ram N, Prince AER, Roberts JL, Fox DC, Spector-Bagdady K, [*The precarious future of consumer genetic privacy*](https://www.science.org/doi/10.1126/science.adz7229), *Science* 389, 1092–1094 (2025).
- GSK, [*GSK and 23andMe sign agreement to leverage genetic insights for the development of novel medicines*](https://www.gsk.com/en-gb/media/press-releases/gsk-and-23andme-sign-agreement-to-leverage-genetic-insights-for-the-development-of-novel-medicines/) (July 25, 2018).
- Blackstone, [*Blackstone Completes Acquisition of Ancestry for $4.7 Billion*](https://www.blackstone.com/news/press/blackstone-completes-acquisition-of-ancestry-leading-online-family-history-business-for-4-7-billion/) (December 2020); implied per-customer valuation framing per [CBS News](https://www.cbsnews.com/news/blackstone-private-equity-ancestry-com-dna/).
- [*Portillo v. Nebula Genomics, Inc. et al.*](https://www.classaction.org/media/portillov-nebula-genomics-inc-et-al.pdf) — class-action complaint, N.D. Ill. 1:24-cv-09894 (filed October 10, 2024; motion to dismiss denied March 2026).
- ProPhase Labs, [*ProPhase Labs, Inc. Announces Completion of Important Next Step*](https://ir.prophaselabs.com/news-events/press-releases/detail/250/prophase-labs-inc-announces-completion-of-important-next) — September 2025 Chapter 11 filings for COVID-19 testing-lab subsidiaries.
- Clyde & Co, [*Advising Bio Cell Tech on its acquisition of Dante Labs Genomics FZE*](https://www.clydeco.com/en/about/news/2024/12/advising-bio-cell-tech) (announced December 2024, closed February 2025) — acquisition was of Dante's UAE subsidiary, not the full Dante Genomics group.
- Coldewey D, [*Controversial genetics testing startup Nucleus Genomics raises $14M Series A*](https://techcrunch.com/2025/01/30/controversial-genetics-testing-startup-nucleus-genomics-raises-14m-series-a/), TechCrunch (January 30, 2025).
- Sequencing.com, [*AI Use Policy*](https://sequencing.com/policies/ai-use-policy); funding history via [GenomeWeb](https://www.genomeweb.com/sequencing/sequencingcom-raises-5m-private-funding).
- Better Business Bureau, [*Dante Labs, Inc. business profile*](https://www.bbb.org/us/ny/new-york/profile/dna-testing/dante-labs-inc-0121-176749) — F rating, pattern-of-complaints designation. Specific complaint count fluctuates; verify at publication time.
- Farr C, [*Veritas Genetics to cease US operations*](https://www.cnbc.com/2019/12/05/veritas-genetics-to-cease-us-operations-talks-with-buyers.html), CNBC (December 5, 2019) — CFIUS context.
- MIT Technology Review, [*More than 26 million people have taken an at-home ancestry test*](https://www.technologyreview.com/2019/02/11/103446/more-than-26-million-people-have-taken-an-at-home-ancestry-test/) (February 11, 2019).
- Fountain Life, [*Membership*](https://www.fountainlife.com/membership) — CORE $10,500 / APEX $21,500 / EPIC $85,000.
- Human Longevity Inc., [*Executive Health*](https://www.humanlongevity.com/executive-health/) — $8,000 entry-tier screening.

### Polygenic Risk Scores and Embryo Selection
- Grebe TA, et al., [*Clinical utility of polygenic risk scores for embryo selection: A points to consider statement of the American College of Medical Genetics and Genomics*](https://www.gimjournal.org/article/S1098-3600(23)01068-7/fulltext), *Genetics in Medicine* (February 2024).
- "2024 Cornell study on polygenic scores" **[needs review]** — unable to identify a Cornell-authored 2024 paper matching the claim; closest candidates are [Turley et al., *NEJM* (2021)](https://www.nejm.org/doi/full/10.1056/NEJMsr2105065) and [Sun et al., *Nature Human Behaviour* (2024)](https://www.nature.com/articles/s41562-024-02019-y) — neither is Cornell-led. Re-attribute or replace.

### Regulatory and Standards
- NIST, [*SP 800-88 Rev. 2 — Guidelines for Media Sanitization*](https://csrc.nist.gov/pubs/sp/800/88/r2/final) (September 26, 2025).
- NYSDOH Wadsworth Center, [*Clinical Laboratory Evaluation Program (CLEP)*](https://www.wadsworth.org/regulatory/clep); [CLEP application guide (PDF)](https://www.wadsworth.org/sites/default/files/WebDoc/CLEP_Program_Guide.pdf).
- CMS, [*CLIA Regulations and Federal Register Documents*](https://www.cms.gov/medicare/quality/clinical-laboratory-improvement-amendments/regulations-federal-register); full text at [42 CFR Part 493 (eCFR)](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-493).
- New York State, [*10 NYCRR Subpart 58-1 — Clinical Laboratories*](https://regs.health.ny.gov/content/subpart-58-1-clinical-laboratories); applicable Public Health Law citations indexed on the [Wadsworth CLEP laws & regulations](https://www.wadsworth.org/regulatory/clep/laws) page.
- NYC Department of City Planning, [*City of Yes for Economic Opportunity — Zoning Text as Modified by the City Planning Commission*](https://www.nyc.gov/assets/planning/downloads/pdf/our-work/plans/citywide/city-of-yes-economic-opportunity/zoning-text-modified-by-cpc.pdf) (adopted by City Council June 6, 2024).
- Sabnis et al., [*A Comprehensive Guide to Achieving New York State Clinical Laboratory Evaluation Program Approval for Next-Generation Sequencing Assays*](https://www.jmdjournal.org/article/S1525-1578(25)00067-4/fulltext), *Journal of Molecular Diagnostics* (March 2025).
- EEOC, [*Genetic Information Nondiscrimination Act of 2008*](https://www.eeoc.gov/statutes/genetic-information-nondiscrimination-act-2008); NHGRI, [*Genetic Discrimination*](https://www.genome.gov/about-genomics/policy-issues/Genetic-Discrimination) — GINA scope excludes life, disability, and long-term-care insurance.
- [*Texas Genomic Act of 2025*](https://statutes.capitol.texas.gov/Docs/HS/htm/HS.174.htm) — Texas Health & Safety Code Chapter 174 (HB 130, effective September 1, 2025).
- [*South Dakota SB 49 / Genetic Data Privacy Act*](https://mylrc.sdlegislature.gov/api/Documents/305520.pdf) — 101st Legislative Session, effective July 1, 2026.

### Technology — Sequencing and Bioinformatics
- Element Biosciences, [*AVITI System*](https://www.elementbiosciences.com/products/aviti); [*Cloudbreak sequencing kits*](https://www.elementbiosciences.com/products/cloudbreak); [*Bases2Fastq documentation*](https://docs.elembio.io/docs/bases2fastq/introduction/).
- AMD, [*EPYC 9654*](https://www.amd.com/en/products/processors/server/epyc/4th-generation-9004-and-8004-series/amd-epyc-9654.html) (part 100-000000789).
- Samsung Semiconductor, [*PM9A3 NVMe datacenter SSD*](https://semiconductor.samsung.com/ssd/datacenter-ssd/pm9a3/); [*M321R8GA0BB0-CQK — 64 GB DDR5-4800 ECC RDIMM*](https://semiconductor.samsung.com/dram/module/rdimm/m321r8ga0bb0-cqk/).
- NVIDIA, [*L40S GPU*](https://www.nvidia.com/en-us/data-center/l40s/); [*Clara Parabricks documentation*](https://docs.nvidia.com/clara/parabricks/latest/index.html).
- Kingston, [*IronKey D500S — Encrypted USB 3.2 Gen 1 Flash Drive*](https://www.kingston.com/en/usb-flash-drives/ironkey-d500s-encrypted) (FIPS 140-3 Level 3).
- New England Biolabs, [*NEBNext Ultra II FS DNA Library Prep Kit for Illumina* (E7805)](https://www.neb.com/en-us/products/e7805-nebnext-ultra-ii-fs-dna-library-prep-kit-for-illumina).
- Open-source pipeline components: [Nextflow](https://www.nextflow.io/), [nf-core/sarek](https://nf-co.re/sarek), [BWA-MEM2](https://github.com/bwa-mem2/bwa-mem2), [GATK](https://gatk.broadinstitute.org/), [samtools](https://www.htslib.org/), [FastQC](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/), [MultiQC](https://multiqc.info/).

---

**END OF DOCUMENT**

*PrivDNA | PrivDNA.com | New York, New York*
