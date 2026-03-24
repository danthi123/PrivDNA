# PrivDNA: Biological Data Sovereignty Through Air-Gapped Whole Genome Sequencing

**A Founding Document and Investment Prospectus**

---

**Prepared by:** PrivDNA
**Domain:** [PrivDNA.com](https://privdna.com)
**Location:** New York City, New York
**Date:** March 2026
**Classification:** Confidential -- For Intended Recipients Only

---

> *"Your genome is the most personal data you will ever generate. It cannot be changed, cannot be revoked, and cannot be anonymized. It deserves infrastructure built from first principles around that reality."*

---

## LEGAL DISCLAIMER

This document is provided for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Any investment in PrivDNA involves significant risk, including the possible loss of principal. Prospective investors should conduct their own due diligence and consult with legal, financial, and tax advisors before making any investment decision. Forward-looking statements contained herein are based on current expectations and assumptions and are subject to risks and uncertainties that could cause actual results to differ materially.

---

## TABLE OF CONTENTS

1. [Executive Summary](#i-executive-summary)
2. [The Problem: Genetic Data Exploitation](#ii-the-problem-genetic-data-exploitation)
3. [The Solution: PrivDNA](#iii-the-solution-privdna)
4. [Market Analysis and Opportunity](#iv-market-analysis-and-opportunity)
5. [Technical Architecture](#v-technical-architecture)
6. [Facility Design and Customer Experience](#vi-facility-design-and-customer-experience)
7. [Regulatory and Compliance Framework](#vii-regulatory-and-compliance-framework)
8. [Operational Playbook](#viii-operational-playbook)
9. [Referral Partnership Model](#ix-referral-partnership-model)
10. [Financial Model](#x-financial-model)
11. [Risk Analysis and Mitigation](#xi-risk-analysis-and-mitigation)
12. [Growth Strategy](#xii-growth-strategy)
13. [Investment Ask and Use of Funds](#xiii-investment-ask-and-use-of-funds)
14. [Appendices](#xiv-appendices)

---

# I. EXECUTIVE SUMMARY

PrivDNA is a first-of-its-kind privacy-sovereign whole genome sequencing (WGS) service operating from a physical storefront in New York City. We sequence customers' complete genomes at clinical-grade accuracy (>90% of bases above Q30), process all data on air-gapped servers that never touch the internet, deliver results on FIPS 140-3 certified encrypted hardware, and destroy all on-premise copies under NIST SP 800-88 Rev. 2 standards -- witnessed by the customer through a glass-walled laboratory.

**The core promise: your DNA data is created in front of you, handed to you, and erased. No copies. No cloud. No exceptions.**

### Why Now

The consumer genomics industry is in crisis. In March 2025, 23andMe filed for Chapter 11 bankruptcy and its approximately 15 million customers' genetic data was acquired by a third party for $305 million through a legal structure that bypassed re-consent requirements. A Nebula Genomics class-action lawsuit alleges the now-defunct "privacy-first" company shared genetic data with Meta, Google, and Microsoft via embedded tracking tools (ProPhase Labs, Nebula's parent, filed Chapter 11 for its lab subsidiaries in September 2025). Consumer trust in genetic testing services has collapsed at the exact moment when whole genome sequencing costs have fallen below $250 per genome at the laboratory level.

This confluence creates a market opening for a fundamentally different model -- one built on physical transparency, cryptographic verifiability, and zero data retention.

### The Business

- **Service:** Clinical-grade 30x whole genome sequencing with raw data delivery (BAM, VCF, gVCF files)
- **Price point:** $3,500 per genome (luxury privacy premium justified by physical transparency, air-gapped processing, certified data destruction, and FIPS 140-3 encrypted delivery)
- **Model:** Raw data only -- no medical interpretation. Pre-vetted referral network for genetic counseling and clinical interpretation
- **Differentiator:** Only WGS provider with a physical storefront, glass-walled lab, open-source pipeline, and witnessed data destruction
- **Open source commitment:** Entire bioinformatics pipeline published on GitHub under permissive licenses. Customers can audit the code that processes their DNA.

### Financial Highlights

| Metric | Value |
|--------|-------|
| Total startup capital required | $997,000 |
| Price per genome | $3,500 |
| Variable cost per genome | $2,340 (with volume discounts) |
| Gross margin per genome | $1,160 |
| Monthly break-even volume | 53 genomes |
| Projected Year 1 net | ($554,400) loss (ramp-up year) |
| Projected Year 3 net | $62,200 profit |
| Projected Year 5 net | $50,000 profit (single-instrument capacity) |

### Investment Ask

We are seeking **$1.35 million in seed funding** to cover startup capital, 12 months of operational runway, and the open-source pipeline development sprint. This funds the NYC flagship through cash-flow positive operations.

---

# II. THE PROBLEM: GENETIC DATA EXPLOITATION

## 2.1 The Unique Nature of Genomic Data

Genomic data occupies a singular position in the hierarchy of personal information. Unlike a password, it cannot be changed. Unlike a Social Security number, it cannot be reissued. Unlike financial records, it does not expire or become irrelevant with time. A genome sequenced today will be re-analyzable with increasing precision for the lifetime of the individual and, by extension, their biological relatives.

This permanence creates an asymmetric risk profile that existing data protection frameworks were not designed to address. A breach of genomic data is irrevocable -- there is no "credit monitoring" equivalent for DNA.

## 2.2 The 23andMe Collapse: A Case Study in Systemic Failure

The trajectory of 23andMe illustrates the structural vulnerability of the centralized genomics model:

**Timeline of Collapse:**

- **2021:** 23andMe goes public via SPAC merger with VG Acquisition Corp. at a $3.5 billion deal valuation; shares briefly trade at an implied $6 billion market capitalization following listing. The company holds the genetic data of over 12 million customers (growing to approximately 15 million by the time of bankruptcy).
- **April-September 2023:** A credential-stuffing attack compromises approximately 6.9 million customer profiles, including ethnicity estimates, geographic locations, and family tree connections. The company is criticized for not requiring multi-factor authentication.
- **September 2024:** All independent board members resign.
- **November 2024:** The company lays off over 200 employees (~40% of its workforce).
- **March 2025:** 23andMe files for Chapter 11 bankruptcy in the Eastern District of Missouri. CEO Anne Wojcicki resigns.
- **March 2025:** A bankruptcy judge rules that 23andMe may sell customer genetic and ancestry data to bidders.
- **May 2025:** Regeneron initially wins the bankruptcy auction at $256 million.
- **July 2025:** In a reopened bidding process, TTAM Research Institute (a nonprofit founded by Wojcicki) prevails with a $305 million bid, acquiring all 23andMe assets. The court approves an "equity toggle" structure where data is placed in a subsidiary and then the subsidiary's equity is sold -- a mechanism the court ruled did not constitute a third-party "transfer" requiring explicit re-consent under state privacy statutes.

The collapse from a peak implied market capitalization of $6 billion to a $305 million asset sale is significant not only as a financial event but as a structural demonstration: when a company holds centralized genetic data, that data becomes an asset in liquidation proceedings, subject to sale without meaningful individual consent.

Multiple state attorneys general urged consumers to delete their data before the sale closed. The incident prompted a 2025 article in *Science* examining the systemic fragility of consumer genetic privacy.

## 2.3 The Broader Pattern of Data Monetization

23andMe was not an anomaly. The centralized genetics business model is built on data monetization:

- 23andMe's $300 million partnership with GlaxoSmithKline (2018) granted the pharmaceutical company access to aggregated genetic data for drug target discovery.
- Ancestry was acquired by Blackstone in 2020 for $4.7 billion. Industry analysts noted the implied per-customer value of approximately $250 per DNA record, suggesting the database itself was a primary asset.
- Nebula Genomics (defunct 2025 -- ProPhase Labs filed Chapter 11 for its lab subsidiaries in September 2025), despite marketing itself as "privacy-first" with blockchain-based data ownership, faces a 2024 class-action lawsuit (Portillo v. Nebula Genomics) alleging the company shared genetic information with Meta, Google, and Microsoft through embedded web tracking tools (Facebook Pixel, Google Analytics, Microsoft Clarity). A federal court denied Nebula's motion to dismiss in late 2025.

The pattern is consistent: companies that hold centralized genetic databases face irresistible economic pressure to monetize that data, regardless of initial privacy commitments.

## 2.4 Consumer Sentiment: Trust at Historic Lows

The erosion of trust is measurable:

- **70%** of consumers express concern about data privacy and security when using digital services (Deloitte, 2025)
- Only **48%** of respondents believe the benefits of online services outweigh privacy concerns -- the lowest level since Deloitte began tracking in 2019
- **60%** of Americans believe the risks of companies collecting personal data outweigh the benefits (Pew Research Center, 2023)
- Only **1 in 10** consumers are willing to share sensitive biometric data (Deloitte, 2025)
- **52%** of Americans opposed DNA testing companies sharing data with law enforcement (Pew Research Center, 2020)

The regulatory environment is responding. More than 10 U.S. states enacted genetic privacy legislation in 2024-2025, including the Texas Genomic Act of 2025. Rhode Island, South Dakota, Vermont, Utah, and Wisconsin have proposed legislation in early 2026.

## 2.5 The Interpretation Gap

Despite this distrust, demand for genomic information continues to grow. Approximately 26 million Americans have undergone consumer genetic testing. The whole genome sequencing market was valued at $2.12 billion in 2024 and is projected to grow at a 22.2% CAGR, reaching $6.67 billion by 2030 (Grand View Research).

Consumers want access to their genomic data. They do not want the companies that generate it to keep copies.

This gap -- between demand for genomic information and distrust of genomic custodians -- is the market PrivDNA was designed to fill.

---

# III. THE SOLUTION: PRIVDNA

## 3.1 The Core Model: A Secure Data Refinery

PrivDNA is not a medical clinic. It is not a diagnostics company. It is a **secure data refinery** -- a facility that takes a biological sample as input, produces structured genomic data as output, and retains nothing.

The business model rests on three pillars:

**1. Physical Transparency**
The laboratory is visible through a floor-to-ceiling glass wall. Customers observe their sample being loaded into the sequencer, their data being processed on the air-gapped server, and their results being transferred to an encrypted drive. A dedicated Technical Representative -- the "Genomic Concierge" -- provides real-time narration of each step.

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
- **Use cloud services.** No data leaves the air-gapped server via any network connection. There is no AWS, no Azure, no BaseSpace, no DNAnexus.
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

# IV. MARKET ANALYSIS AND OPPORTUNITY

## 4.1 Total Addressable Market

**Consumer Genomics (Global):** $2.03 billion (2024), projected to reach $8.17 billion by 2030 at a 21.73% CAGR (360iResearch).

**Whole Genome Sequencing (Global):** $2.12 billion (2024), projected to reach $6.67 billion by 2030 at a 22.2% CAGR (Grand View Research).

**Direct-to-Consumer Genetic Testing (Global):** $1.95 billion (2024), projected to reach $9.57 billion by 2034 at a 17.90% CAGR (Precedence Research).

## 4.2 Serviceable Addressable Market

PrivDNA's initial SAM is defined by:

- **Geography:** New York City metropolitan area (population: ~20.1 million)
- **Demographics:** Health-conscious adults aged 25-65 with household income >$100,000 (approximately 3.2 million in the NYC metro area)
- **Privacy sensitivity:** The 60% of this demographic who express willingness to pay a premium for data protection (Statista, 2024) -- approximately 1.92 million individuals
- **WGS interest:** Estimated 5-10% of privacy-sensitive high-income consumers who would consider WGS in a given year -- approximately 96,000-192,000 individuals

## 4.3 Serviceable Obtainable Market

Given PrivDNA's single-location capacity (~750 genomes/year at full utilization with realistic maintenance) and realistic market penetration for a new brand:

- **Year 1 target:** 200 genomes (0.1-0.2% of addressable)
- **Year 2 target:** 480 genomes (0.3-0.5% of addressable)
- **Year 3 target:** 720 genomes (0.4-0.8% of addressable)
- **Year 5 target:** 750 genomes (at single-instrument capacity)

## 4.4 Competitive Landscape

### The Market Has Two Tiers

**Tier 1: SNP Genotyping (Low Resolution)**
23andMe and Ancestry dominate this tier with SNP microarray tests at $99-$229. These tests examine 600,000-700,000 specific genetic markers -- less than 0.02% of the genome. They serve casual ancestry curiosity and basic trait analysis.

**Tier 2: Whole Genome Sequencing (Full Resolution)**
WGS reads the complete 3.2 billion base pairs of the human genome. This tier is served by Sequencing.com ($399), Nucleus Genomics ($499), and Dante Labs ($499-$700). Nebula Genomics ($249-$299) was a notable participant but is now defunct (2025) -- its parent company ProPhase Labs filed Chapter 11 for its laboratory subsidiaries in September 2025. All remaining competitors operate via mail-order.

### Competitive Comparison Matrix

| Feature | 23andMe | Ancestry | Nebula (defunct 2025) | Nucleus | Dante Labs | **PrivDNA** |
|---------|---------|----------|----------------------|---------|------------|-------------|
| Data type | SNP array | SNP array | 30x WGS | 30x WGS | 30x WGS | **30x WGS** |
| Price | $99-$229 | $99-$119 | $249-$299 | $499 | $499-$700 | **$3,500** |
| Physical storefront | No | No | No | No | No | **Yes** |
| Glass-walled lab | No | No | No | No | No | **Yes** |
| Air-gapped processing | No | No | No | No | No | **Yes** |
| Open source pipeline | No | No | Partial | No | No | **Yes** |
| Data retention | Indefinite | User-controlled | N/A | 60-day sample | 10 years | **Zero** |
| Witnessed destruction | No | No | No | No | No | **Yes** |
| Live technical representative | No | No | No | No | No | **Yes** |
| FIPS 140-3 encrypted delivery | No | No | No | No | No | **Yes** |

### The Whitespace

**No existing competitor offers a physical, in-person genomics experience.** The entire DTC genomics market operates via mail-order saliva kits. There is no "retail DNA testing storefront" in operation from any established player. This is distinct from WGS offered as a component of concierge medicine or executive health programs, where sequencing is typically outsourced to external labs and data is retained in the clinical record.

PrivDNA occupies a category of one: a premium, physically transparent, cryptographically verifiable, zero-retention genomics service. The $3,500 price point is justified not by the sequencing itself (commodity) but by the infrastructure, trust architecture, and experience surrounding it.

## 4.5 The Privacy Premium

Quantitative evidence supports premium pricing for privacy:

- 60% of U.S. adults express willingness to pay a premium for companies with strong data protection (Statista, 2024)
- Consumers who view their tech providers as excelling in both innovation and data responsibility spend **62% more annually** compared to consumers who rate providers as lagging on both dimensions (Deloitte, 2025)
- In a PLOS ONE study (2020, n=2,020), 37.8% of respondents stated they would not provide genetic data at any price, and 50.6% would provide it only with financial compensation or strong privacy guarantees

The top three policies that increase consumer willingness to share genetic data are: (1) ability to request data deletion, (2) assurance data would not be sold or shared, and (3) specific permissions required for reuse. PrivDNA's model satisfies all three by design.

---

# V. TECHNICAL ARCHITECTURE

## 5.1 Sequencing Platform

**Primary instrument: Illumina NextSeq 2000**

| Specification | Value |
|--------------|-------|
| Chemistry | XLEAP-SBS |
| Flow cell (primary) | P3 300-cycle (2x150 bp) |
| Output per P3 run | ~330 Gb (sufficient for ~3 genomes at 30x) |
| Quality | >90% bases above Q30 |
| Run time (2x150 bp P3) | ~29-35 hours |
| Dimensions | 60 x 65 x 66 cm |
| Integrated compute | DRAGEN Bio-IT FPGA (on-instrument basecalling) |

The NextSeq 2000 is the optimal platform for PrivDNA's volume tier. It balances throughput, footprint, and cost-per-genome without the capital intensity of the NovaSeq X series ($985,000+). At 3 genomes per P3 run, ~35-hour run cycles, and realistic maintenance and library prep schedules, a single NextSeq 2000 can process approximately 4-5 runs per week, yielding 12-15 genomes per week or 50-65 genomes per month.

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

All bioinformatics processing occurs on a dedicated, air-gapped server that has no network interface capable of reaching the internet. The server communicates only with the Illumina sequencer via a physically isolated local network segment.

### Server Specifications

| Component | Specification | Part Number |
|-----------|--------------|-------------|
| CPUs | 2x AMD EPYC 9654 (96-core/192-thread, 2.4/3.7 GHz, 384 MB L3) | 100-000000789 |
| Chassis | Supermicro AS-2125HS-TNR (2U, 24x NVMe hot-swap) | AS-2125HS-TNR |
| RAM | 1 TB DDR5-4800 ECC RDIMM (16x 64 GB Samsung) | M321R8GA0BB0-CQK |
| Storage | 92 TB usable (24x Samsung PM9A3 7.68 TB NVMe, RAID-10) | MZQL27T6HBLA-00A07 |
| GPU | NVIDIA A100 80 GB PCIe (Parabricks acceleration) | A100-PCIE-80GB |
| TPM | Supermicro TPM 2.0 (Infineon SLB9670) | AOM-TPM-9670V |

The NVIDIA A100 GPU enables NVIDIA Clara Parabricks acceleration, reducing the full WGS pipeline (alignment through variant calling) from 8-16 hours on CPU alone to approximately 30-45 minutes on GPU-accelerated paths.

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

### NextSeq 2000 Sequencer Isolation

The Illumina NextSeq 2000 is configured for fully local operation:

- **BaseSpace Sequence Hub integration disabled:** The instrument's cloud upload functionality is turned off at the instrument control software level. No run data is transmitted to Illumina's BaseSpace cloud platform.
- **Local output only:** Sequencer output is configured to write exclusively to a local SMB/NFS share on the isolated VLAN. The compute server mounts this share as the sole data destination.
- **Firewall enforcement:** All outbound traffic from the sequencer's IP address is blocked at the Netgate firewall. No DNS resolution, no NTP synchronization to external servers, and no HTTPS connections to Illumina endpoints are permitted.
- **Illumina field service confirmation:** Prior to deployment, Illumina field service engineering will confirm that the NextSeq 2000 operates in local-output-only mode without requiring internet check-ins for continued operation. Instrument software updates are applied offline via USB media during scheduled maintenance windows.

## 5.3 Open Source Bioinformatics Pipeline

The pipeline processes raw sequencer output into analysis-ready genomic data using exclusively open-source tools:

### Pipeline Stages

```
Stage 1: Basecalling & Demultiplexing
  Illumina BCL files -> BCL Convert v4.4.6 -> FASTQ (R1 + R2 per sample)
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

The pipeline is orchestrated via **Nextflow** using the **nf-core/sarek** framework -- a production-validated, community-maintained WGS/WES analysis pipeline. Sarek is the most battle-tested open-source WGS pipeline available, with contributions from dozens of institutions worldwide.

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
| Basecalling | BCL Convert | 30-90 min | N/A |
| QC | FastQC | 10-20 min | N/A |
| Alignment | BWA-MEM2 | 2-4 hours | ~10 min (Parabricks) |
| Sort + dedup | samtools + GATK | 1-2 hours | ~5 min (Parabricks) |
| BQSR | GATK | 1-2 hours | ~5 min (Parabricks) |
| Variant calling | HaplotypeCaller | 3-6 hours | ~10 min (Parabricks) |
| **Total** | | **8-16 hours** | **~45 min** |

### Storage Requirements Per Genome

| Stage | Size | Retention |
|-------|------|-----------|
| Raw BCL (shared per run) | 200-400 GB per run | Deleted after FASTQ generation |
| FASTQ (compressed) | 60-90 GB | Deleted after BAM validation |
| Analysis-ready BAM + index | 80-100 GB | Delivered to customer, then destroyed |
| gVCF | 5-10 GB | Delivered to customer, then destroyed |
| Final VCF | ~1 GB | Delivered to customer, then destroyed |
| QC reports | ~50 MB | Delivered to customer, then destroyed |
| **Peak working storage** | **~400-500 GB** | During processing only |

With 92 TB usable storage (RAID-10), the server can process approximately 15-20 genomes simultaneously with full intermediate files -- well above operational throughput requirements.

## 5.4 Data Destruction Protocol

PrivDNA follows NIST SP 800-88 Revision 2 (September 2025) -- the current authoritative standard for media sanitization, which supersedes the legacy DoD 5220.22-M standard.

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
1. **Trust architecture:** Customers can see their sample being processed and their data being destroyed in real time.
2. **Marketing:** The visible laboratory creates an experiential retail environment unlike any other genomics service -- a "theater of science" that generates organic social media attention and word-of-mouth.

## 6.3 Customer Journey

### Step 1: Walk-In or Appointment (~15 minutes)
The customer enters the storefront and is greeted by the Genomic Concierge. The concierge explains the process, answers questions about sequencing technology and privacy protocols, and guides the customer through consent documentation.

### Step 2: Sample Collection (~10 minutes)
A trained laboratory technician collects a saliva or buccal swab sample using a standard collection kit. The sample is labeled with a unique barcode in view of the customer.

### Step 3: DNA Extraction and Library Preparation (~2-4 hours)
The technician extracts DNA, checks quality (Qubit quantification, TapeStation fragment analysis), and prepares a sequencing library using Illumina DNA Prep chemistry. This process is visible through the glass wall.

### Step 4: Sequencing (~29-35 hours)
The library is loaded onto an Illumina NextSeq 2000 P3 flow cell. The sequencing run takes approximately 29-35 hours. The customer does not need to be present during this time and is notified when the run completes.

### Step 5: Bioinformatics Processing (~1-16 hours)
The air-gapped server processes raw sequencer data through the open-source pipeline. With GPU acceleration, this step completes in under an hour.

### Step 6: Data Delivery and Witnessed Destruction (~30 minutes)
The customer returns to the storefront. The concierge walks them through the results package on their encrypted USB drive, verifying SHA-256 checksums. The customer then witnesses the data destruction process through the glass wall. They receive:
- Their encrypted USB drive (FIPS 140-3 Level 3 certified)
- A printed Certificate of Destruction
- A referral packet for partner genetic counseling services

### Total Turnaround: 3-5 Business Days

## 6.4 The Genomic Concierge

The Technical Representative ("Genomic Concierge") is the face of PrivDNA's privacy guarantee and the most customer-facing hire.

**Required Profile:**
- B.S. or M.S. in Molecular Biology, Genetics, Genomics, or related life science field
- Minimum 2 years of customer-facing experience (former lab tech, science educator, genetic counseling assistant)
- Strong communication skills -- ability to translate complex genomics and cybersecurity concepts into accessible language
- Comfort with public-facing role (this is a retail position, not a back-office role)

**Responsibilities:**
- Greet customers and explain the end-to-end process
- Provide live narration of lab activities visible through the glass wall
- Explain the air-gap security model, open-source pipeline, and data destruction protocols
- Manage the data handoff ceremony (encrypted USB delivery + witnessed destruction)
- Handle customer questions and referrals to partner interpretation services
- Conduct small-group educational sessions or media tours as needed

**Compensation:** $90,000-$110,000/year (NYC market rate for STEM-background customer-facing roles)

---

# VII. REGULATORY AND COMPLIANCE FRAMEWORK

## 7.1 Federal Requirements

### CLIA Certification

Clinical laboratory testing in the United States requires certification under the Clinical Laboratory Improvement Amendments (CLIA), administered by CMS. Whole genome sequencing is classified as **high-complexity** testing -- the highest CLIA category.

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

New York State requires any laboratory testing specimens originating in New York to hold a NYS clinical laboratory permit, administered by the Wadsworth Center. This is one of the most stringent state lab oversight programs in the United States and applies **in addition to** federal CLIA certification.

**Key requirements:**
- Appoint a NYS-certified laboratory director
- Submit standard operating procedures (SOPs) and validation data for all laboratory-developed tests (LDTs)
- NYS considers any non-FDA-approved test method an LDT requiring CLEP review -- this includes WGS, even when producing only raw data
- Pass an on-site inspection by CLEP surveyors before testing begins
- Enroll in proficiency testing (PT) with a CMS-approved provider

**Fees:** $1,100 initial application + $100/year renewal

**Timeline:** 6-12+ months from application to permit issuance. The LDT review process alone can take several months.

**Regulatory basis:** NY Public Health Law Article 5, Title V; 10 NYCRR Part 58

### NYC Zoning

NYC's "City of Yes for Economic Opportunity" zoning reform (adopted 2024-2025) significantly expanded where laboratories can operate:

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

The Genetic Information Nondiscrimination Act (GINA) prohibits discrimination by health insurers and employers based on genetic information. However, **GINA does not cover life insurance, disability insurance, or long-term care insurance.** Customers are advised to consult with an attorney before undergoing WGS if they have pending applications for these types of insurance. PrivDNA includes this advisory in its pre-sequencing consent documentation.

---

# VIII. OPERATIONAL PLAYBOOK

## 8.1 Staffing Plan

| Role | FTE | Annual Compensation | Notes |
|------|-----|-------------------|-------|
| Laboratory Director | 0.25 (contract) | $65,000 | Required for CLIA/CLEP. NYC market rate for board-certified lab director at 0.25 FTE. Can serve up to 5 labs. |
| Molecular Laboratory Technician | 1.0 | $95,000 | Operates sequencer, performs sample prep and QC |
| Bioinformatics Engineer | 1.0 | $145,000 | Maintains air-gapped pipeline, handles data processing, manages open-source repos |
| Genomic Concierge (Technical Rep) | 1.0 | $100,000 | Customer-facing: explains process, manages handoff, answers questions |
| **Total payroll** | **3.25** | **$405,000** | Excludes benefits loading (~20-25%) |

**With benefits loading (~22%):** Total annual payroll cost: ~$494,000

**Customer consent and withdrawal:** Customers may withdraw consent and request sample destruction at any time before delivery of final results. In such cases, all biological samples and any in-process data are destroyed under the standard NIST SP 800-88 protocol, and the customer receives a Certificate of Destruction. No charge applies if withdrawal occurs before sequencing begins; a partial fee may apply after sequencing has commenced.

### Hiring Sequence

1. **Month -6 (pre-launch):** Bioinformatics Engineer (builds pipeline, sets up servers)
2. **Month -3:** Laboratory Director (contract, begins CLIA/CLEP application oversight)
3. **Month -1:** Molecular Lab Technician (equipment calibration, validation runs)
4. **Month 0 (launch):** Genomic Concierge (opens doors to customers)

## 8.2 Daily Operations

### Sample Processing Workflow

A single NextSeq 2000 with P3 flow cells operates on a **batch cycle**:

1. **Days 1-2:** Collect samples, extract DNA, prepare libraries (batch of up to 3 samples per flow cell)
2. **Day 2-3:** Load flow cell and begin sequencing run (~35 hours)
3. **Day 4:** Sequencing completes; bioinformatics pipeline begins (45 min with GPU, 8-16 hrs CPU)
4. **Day 4-5:** QC review, data transfer to encrypted USB, customer notification
5. **Day 5:** Customer pickup, witnessed destruction, certificate generation

At steady state, with overlapping batches (new library prep begins while current run is active), throughput reaches 4-5 runs per week or approximately 12-15 genomes per week (50-65 per month).

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
- DNA concentration verification (Qubit): must meet minimum input requirement for Illumina DNA Prep
- Fragment size distribution (TapeStation): confirms intact genomic DNA
- Sample identity tracking: barcode scanned at every handoff point

### Analytical QC
- Per-run quality metrics: %Q30 >90%, cluster density within Illumina specifications, %PF (passing filter) within range
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

**Operational contingency reserve:** $30,000 reserved in startup capital for reagent waste and re-runs during the first 90 days of operations as the team calibrates processes.

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

### Revenue Model

PrivDNA does not charge partners for referrals and does not receive referral fees from partners. This preserves the independence of the referral relationship and avoids potential regulatory complications under the federal Anti-Kickback Statute (AKS) and applicable New York State anti-kickback and fee-splitting statutes (NY Education Law Section 6509-a; NY Public Health Law Section 238-a). Because PrivDNA does not bill any federal health care program (Medicare, Medicaid, TRICARE, etc.), the federal AKS may not apply directly, but PrivDNA structures its referral relationships to comply regardless. Referral partners are responsible for their own AKS compliance with respect to their practices.

Instead, the referral network creates value through:

1. **Customer acquisition:** Genetic counselors and clinical geneticists refer patients who want sequencing to PrivDNA
2. **Customer satisfaction:** Customers who can easily access interpretation are more satisfied and more likely to recommend PrivDNA
3. **Brand positioning:** Association with licensed clinical professionals reinforces PrivDNA's credibility despite not offering interpretation directly

### Future Revenue Opportunity

As the partner network matures, PrivDNA may explore a **marketplace model** where customers can browse and book interpretation services directly through the PrivDNA platform. This would generate a booking fee (5-15%) without PrivDNA ever touching the clinical interpretation.

## 9.3 Referral Workflow

1. Customer receives their encrypted USB drive from PrivDNA
2. Customer receives a referral packet listing vetted interpretation partners
3. Customer contacts partner directly and shares their data at their own discretion
4. Partner provides interpretation under their own clinical license
5. PrivDNA has no involvement in or visibility into the interpretation process

---

# X. FINANCIAL MODEL

## 10.1 Capital Expenditure (CAPEX)

### Sequencing and Laboratory Equipment

| Item | Cost |
|------|------|
| Illumina NextSeq 2000 | $335,000* |
| Thermo Fisher Qubit 4 | $4,000 |
| Agilent TapeStation 4150 | $16,000 |
| Bio-Rad T100 Thermal Cycler | $3,500 |
| Eppendorf 5810R Centrifuge | $6,000 |
| Eppendorf 5424R Microcentrifuge | $3,500 |
| Pipettes (Eppendorf Research Plus set) | $3,200 |
| Vortex mixer | $500 |
| Laboratory freezer (-20°C, reagent storage) | $5,000 |
| Laboratory refrigerator (2-8°C, buffer storage) | $2,000 |
| **Subtotal: Lab Equipment** | **$378,700** |

*\*NextSeq 2000 list price is $335,000. Certified refurbished units are available in the $75,000-$150,000 range from authorized resellers. PrivDNA will evaluate both new and refurbished options during procurement, potentially reducing CAPEX by $150,000-$250,000. Financial projections use the list price as a conservative baseline.*

### Air-Gapped Compute Infrastructure

| Item | Cost |
|------|------|
| 2x AMD EPYC 9654 CPUs | $25,000 |
| Supermicro AS-2125HS-TNR chassis | $5,000 |
| 1 TB DDR5 ECC RAM (16x 64 GB Samsung) | $4,800 |
| 24x Samsung PM9A3 7.68 TB NVMe (92 TB usable RAID-10) | $117,576 |
| NVIDIA A100 80 GB PCIe GPU | $13,000 |
| Cisco Catalyst 1000 switch | $325 |
| Netgate 6100 MAX firewall | $949 |
| Cabling and accessories | $150 |
| Eaton 9PX 3000VA UPS | $3,500 |
| Eaton extended battery module | $1,500 |
| Eaton SmartRack 42U rack | $1,800 |
| Room cooling (mini-split) | $2,500 |
| TPM 2.0 module | $50 |
| Physical security (seals, port blockers) | $150 |
| **Subtotal: Compute Infrastructure** | **$176,300** |

### Facility and Buildout

| Item | Cost |
|------|------|
| Security deposit (4 months at ~$10,000/mo) | $40,000 |
| Glass wall construction and installation | $22,000 |
| Lab-specific MEP buildout (HVAC, plumbing, electrical) | $85,000 |
| Furniture, signage, and reception buildout | $15,000 |
| **Subtotal: Facility** | **$162,000** |

### Software Development (Open Source Pipeline)

| Item | Cost |
|------|------|
| Pipeline development (2 senior bioinformatics contractors, 4 months) | $95,000 |
| Chain-of-custody system development | $15,000 |
| **Subtotal: Software** | **$110,000** |

### Regulatory and Legal

| Item | Cost |
|------|------|
| CLIA application and lab director consulting | $5,000 |
| CLEP application and LDT validation | $8,000 |
| CAP accreditation (first year) | $7,000 |
| Legal (entity formation, contracts, IP, privacy policy) | $15,000 |
| **Subtotal: Regulatory/Legal** | **$35,000** |

### Marketing and Launch

| Item | Cost |
|------|------|
| Brand identity and website development | $20,000 |
| Pre-launch digital marketing campaign | $15,000 |
| PR and media outreach | $10,000 |
| Launch event | $5,000 |
| **Subtotal: Marketing** | **$50,000** |

### Reserves

| Item | Cost |
|------|------|
| Operational contingency reserve (first 90 days) | $30,000 |
| Initial consumables inventory (~25 genomes) | $55,000 |
| **Subtotal: Reserves** | **$85,000** |

### TOTAL CAPEX

| Category | Cost |
|----------|------|
| Lab Equipment | $378,700 |
| Compute Infrastructure | $176,300 |
| Facility | $162,000 |
| Software Development | $110,000 |
| Regulatory/Legal | $35,000 |
| Marketing | $50,000 |
| Reserves | $85,000 |
| **TOTAL STARTUP CAPITAL** | **$997,000** |

## 10.2 Operating Expenses (OPEX) -- Annual

### Fixed Costs

| Item | Annual Cost |
|------|------------|
| Payroll (fully loaded) | $494,000 |
| Rent (Manhattan, ~1,200 sq ft at ~$100/sq ft) | $120,000 |
| Insurance (GL, PL, cyber, property, WC) | $40,000 |
| Utilities (including server power at ~$1,600/yr) | $12,000 |
| Ongoing marketing | $36,000 |
| CLIA/CLEP/CAP renewals | $3,000 |
| Legal and accounting | $15,000 |
| IT and security maintenance | $8,000 |
| **Total Annual Fixed Costs** | **$728,000** |

**Note on insurance:** The $40,000 annual insurance budget covers professional liability, cyber liability (essential for a genomic data handler), general liability, workers' compensation, and property coverage appropriate for a CLIA high-complexity laboratory handling sensitive biological specimens and genomic data.

### Variable Costs Per Genome

| Item | Cost Per Genome |
|------|----------------|
| P3 300-cycle reagent kit ($6,150 / 3 genomes) | $2,050 |
| Library prep (Illumina DNA Prep + indexes) | $40 |
| QC consumables (Qubit assays, TapeStation screens) | $10 |
| Encrypted USB drive (Kingston IronKey D500S 512 GB) | $390 |
| Collection kit and extraction reagents | $25 |
| Miscellaneous consumables (tips, tubes) | $10 |
| Failure buffer (~5% re-run allowance on consumables excl. USB) | $106 |
| **Total Variable Cost Per Genome** | **$2,631** |

**Note on encrypted USB cost:** The IronKey D500S at $390 per unit is a significant per-genome cost. This is a deliberate choice: FIPS 140-3 Level 3 certification, PIN-based access (immune to keyloggers), and brute-force self-destruct are tangible, brandable privacy features that justify the price point to privacy-conscious customers. Alternative options (Apricorn Aegis 3NX at ~$179 for 128 GB) could reduce this cost but with lower certification levels.

## 10.3 Unit Economics

### Primary Model: $3,500/genome + Volume Discounts

| Metric | Value |
|--------|-------|
| Revenue per genome | $3,500 |
| Variable cost per genome (with 15% reagent discount) | $2,340 |
| Gross margin per genome | $1,160 |
| Annual fixed costs | $728,000 |
| Break-even volume | 628 genomes/year (53/month) |

**Pricing rationale:** The target customer is a high-net-worth NYC individual who values privacy and transparency above all else. At $3,500, the service is positioned as a luxury privacy experience -- analogous to private banking or concierge medicine -- not as a commodity sequencing service competing with $249 mail-order tests. This is distinct from WGS offered as a component of concierge medicine or executive health programs, where sequencing is typically outsourced to external labs and data is retained in the clinical record.

### Without Volume Discounts ($3,500/genome, list prices)

| Metric | Value |
|--------|-------|
| Revenue per genome | $3,500 |
| Variable cost per genome | $2,631 |
| Gross margin per genome | $868 |
| Annual fixed costs | $728,000 |
| Break-even volume | 839 genomes/year (70/month) |

**Note:** At list consumable prices, unit economics remain positive at $3,500 but with thinner margins. The sensitivity analysis (Section 10.6) models results at various price points.

### Why $1,950 Was Rejected

Early analysis considered a $1,950 price point to position closer to existing WGS services. At list consumable prices, this produces a **negative gross margin of ($682) per genome**, making the business unviable at any volume. Even with aggressive volume discounts, a sub-$2,500 price point requires throughput exceeding single-instrument capacity to reach break-even. The $3,500 price point was selected as the minimum viable premium that supports sustainable operations.

## 10.4 Break-Even Analysis (at $3,500/genome, with volume discounts)

| Metric | Value |
|--------|-------|
| Revenue per genome | $3,500 |
| Variable cost per genome | $2,340 |
| Gross margin per genome | $1,160 |
| Monthly fixed costs | $60,667 |
| **Monthly break-even** | **53 genomes** |
| **Annual break-even** | **628 genomes** |

## 10.5 Five-Year Profit and Loss Projection

*Assumes $3,500/genome pricing, 15% reagent volume discounts beginning Year 2*

**Note on volume discounts:** The 15% volume discount is assumed beginning Year 2 based on projected purchasing volume of approximately 160 P3 flow cells per year. This requires negotiation with Illumina and is not guaranteed for a startup with no prior purchasing history. The sensitivity analysis (Section 10.6) shows results at various price points to account for this uncertainty. Year 1 projections use list consumable prices.

| | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|---|--------|--------|--------|--------|--------|
| **Genomes processed** | 200 | 480 | 720 | 750 | 750 |
| **Revenue** | $700,000 | $1,680,000 | $2,520,000 | $2,625,000 | $2,625,000 |
| Variable costs | $526,400 | $1,123,200 | $1,684,800 | $1,755,000 | $1,755,000 |
| **Gross profit** | $173,600 | $556,800 | $835,200 | $870,000 | $870,000 |
| Fixed costs | $728,000 | $750,000 | $773,000 | $796,000 | $820,000 |
| **Net income (loss)** | **($554,400)** | **($193,200)** | **$62,200** | **$74,000** | **$50,000** |
| Cumulative P&L | ($554,400) | ($747,600) | ($685,400) | ($611,400) | ($561,400) |

**Key milestones:**
- **Month 30-32 (mid-Year 3):** Monthly operations reach profitability
- **Year 4-5:** Profits are constrained by single-instrument capacity (~750 genomes/year). A second instrument (per Phase 2, Section 12.2) would approximately double capacity and significantly accelerate cumulative break-even.

**Note:** Year 1 variable costs use list consumable prices ($2,631/genome). Years 2-5 assume 15% volume discounts ($2,340/genome). Fixed costs escalate ~3% annually.

## 10.6 Sensitivity Analysis

### Price Sensitivity

| Price Point | Gross Margin | Annual Break-Even | Year 3 Net |
|-------------|-------------|-------------------|------------|
| $2,500 | $160 | 4,550 genomes (impossible on 1 machine) | N/A |
| $3,000 | $660 | 1,103 genomes (exceeds single-instrument capacity) | ($297,800) |
| $3,500 | $1,160 | 628 genomes | $62,200 |
| $4,000 | $1,660 | 439 genomes | $422,200 |
| $4,500 | $2,160 | 337 genomes | $782,200 |

### Volume Sensitivity (at $3,500/genome)

| Genomes/Month | Annual Revenue | Annual Net |
|---------------|---------------|------------|
| 30 | $1,260,000 | ($310,400) |
| 40 | $1,680,000 | ($171,200) |
| 50 | $2,100,000 | ($32,000) |
| 53 | $2,226,000 | ~$0 (break-even) |
| 60 | $2,520,000 | $107,200 |
| 65 | $2,730,000 | $176,800 |

## 10.7 Cash Flow Requirement

Based on Year 1-2 projected losses:

| Period | Net Loss | Cumulative Cash Need |
|--------|----------|---------------------|
| Startup CAPEX | ($997,000) | ($997,000) |
| Year 1 operations | ($554,400) | ($1,551,400) |
| Year 2 operations | ($193,200) | ($1,744,600) |

**Total funding required through profitability: ~$1.35 million** (startup capital of $997,000 plus ~$353,000 in operational runway to cover Year 1-2 losses, partially offset by Year 1-2 revenue).

---

# XI. RISK ANALYSIS AND MITIGATION

## 11.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Sequencer hardware failure | Medium | High (weeks of downtime for repair) | Illumina service contract with next-business-day response; maintain relationships with local Illumina field service engineers |
| NVMe drive failure in RAID array | Medium | Low (RAID-10 tolerates 1 failure per mirror) | Hot-spare drives on hand; daily SMART monitoring; automated alerts |
| GPU failure | Low | Medium (pipeline reverts to CPU-only, 16-hour processing) | CPU fallback is always available; A100 replacement within 1-2 weeks |
| Pipeline software bug | Low | Medium | Extensive validation before launch; version-pinned containers; community code review via open source |
| Power failure beyond UPS capacity | Low | Medium | UPS provides 15-30 minutes; generator backup negotiable with building management |

## 11.2 Regulatory Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| CLEP application delays (>12 months) | Medium | High (delays launch) | Begin application 12+ months before planned launch; engage experienced regulatory consultant |
| CLEP LDT validation requirements exceed expectations | Medium | Medium | Budget additional validation runs; consult J Mol Diagn 2025 guide for NGS CLEP approval |
| FDA regulation of LDTs | Low | High (potential industry-wide disruption) | The FDA's 2024 LDT final rule was struck down by federal court in March 2025 and formally vacated by FDA in September 2025. The immediate regulatory threat has been resolved. However, Congressional action could create a new framework in the future. PrivDNA maintains compliance with current CLIA/CLEP standards and monitors legislative developments. |
| Changes to HIPAA genetic data provisions | Low | Medium | Maintain compliance exceeding current requirements; zero-retention model is inherently future-proof |

## 11.3 Market Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| WGS price compression erodes premium pricing | High | Medium | PrivDNA's value is in the privacy infrastructure and experience, not in the sequencing itself; as sequencing becomes commodity, the premium shifts further toward trust |
| Competitor launches similar storefront model | Low | Medium | First-mover advantage; open-source community; brand equity; NYC location lock |
| Consumer demand lower than projected | Medium | High | Marketing pivots to B2B (corporate wellness, family offices, trusts); tiered pricing; geographic expansion |
| Economic downturn reduces discretionary spending | Medium | Medium | $3,500 is within range for target demographic even in downturn; genomic data is a one-time purchase with permanent value |

## 11.4 Operational Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Key person dependency (Bioinformatics Engineer) | High | High | Document all processes; open-source pipeline means community can support; cross-train lab technician on basic pipeline operations |
| Sample contamination during library prep | Medium | Low-Medium | Standard pre-PCR/post-PCR separation; contamination checks in pipeline (VerifyBamID); re-collection at no charge |
| Physical security breach | Low | High | 24/7 CCTV; access control; tamper-evident seals; environmental monitoring; insurance coverage |
| Data breach during 3-5 day processing window | Low | High (genomic data exists on server during processing) | Air-gapped network eliminates remote attack vectors; physical access controls (keycard, biometric); SED encryption on all NVMe drives (data at rest is always encrypted); 24/7 CCTV monitoring of server room; processing window minimized via GPU acceleration (~45 min vs. 8-16 hrs); data destroyed immediately upon delivery |

---

# XII. GROWTH STRATEGY

## 12.1 Phase 1: NYC Flagship (Months 0-18)

**Objective:** Establish operations, validate the model, build brand recognition.

- Launch single NYC location
- Achieve 30+ genomes/month by Month 12
- Build referral partner network (5-10 genetic counselors/services)
- Publish open-source pipeline; build GitHub community
- Generate press coverage leveraging the 23andMe/privacy narrative

## 12.2 Phase 2: Capacity Expansion (Months 18-36)

**Objective:** Maximize NYC location throughput and explore adjacent revenue.

- Upgrade to second NextSeq 2000 or NovaSeq X system as volume justifies
- Launch **PrivDNA for Families** (multi-genome packages at reduced per-unit pricing)
- Explore **PrivDNA Corporate** (family offices, executive health programs, corporate wellness)
- Begin planning for second location

## 12.3 Phase 3: Geographic Expansion (Months 36-60)

**Objective:** Replicate the model in high-value markets.

**Target markets (in priority order):**
1. **San Francisco / Bay Area** -- tech-savvy, privacy-conscious, high-income population
2. **Los Angeles** -- wellness culture, entertainment industry demand for privacy
3. **Miami** -- growing tech/finance hub, international clientele
4. **Chicago** -- financial services hub, growing privacy awareness, strong executive health market

Each new location replicates the NYC model with identical equipment, pipeline, and experience design. The open-source pipeline and standardized SOPs enable rapid replication.

## 12.4 Phase 4: Platform Evolution (Year 5+)

**Long-term opportunities:**
- **Interpretation marketplace:** Platform connecting PrivDNA customers with vetted genetic counselors (booking fee model)
- **Re-sequencing service:** As sequencing technology advances, customers return for updated analysis of their stored encrypted data (they bring back their USB drives)
- **International expansion:** Privacy-conscious markets in Western Europe (GDPR alignment), Japan, South Korea
- **B2B partnerships:** Privacy-focused life insurance underwriters, corporate wellness programs, concierge medicine practices

---

# XIII. INVESTMENT ASK AND USE OF FUNDS

## 13.1 Total Raise

**PrivDNA is seeking $1.35 million in seed funding.**

## 13.2 Use of Funds

| Allocation | Amount | % of Raise |
|------------|--------|------------|
| Sequencing and lab equipment | $378,700 | 28.1% |
| Air-gapped compute infrastructure | $176,300 | 13.1% |
| Facility buildout (deposit, glass wall, MEP) | $162,000 | 12.0% |
| Open-source software development | $110,000 | 8.1% |
| Regulatory and legal | $35,000 | 2.6% |
| Marketing and launch | $50,000 | 3.7% |
| Reserves (consumables + contingency) | $85,000 | 6.3% |
| **Operational runway (12 months)** | **$353,000** | **26.1%** |
| **Total** | **$1,350,000** | **100%** |

## 13.3 Milestones Tied to Funding

| Milestone | Timeline | Funding Tranche |
|-----------|----------|----------------|
| Entity formation, lease execution, equipment orders | Month 0-2 | $425,000 |
| Lab buildout, CLIA/CLEP applications, pipeline development | Month 2-6 | $375,000 |
| Equipment installation, validation runs, staff hiring | Month 6-10 | $325,000 |
| Launch, initial marketing push, first customer | Month 10-12 | $225,000 |

## 13.4 Return Projections

Based on the five-year financial model (Section X):

| Metric | Value |
|--------|-------|
| Total investment | $1,350,000 |
| Cumulative net income through Year 5 (single instrument) | ($561,400) |
| Projected Year 5 annual net income | $50,000 (capacity-constrained) |
| Projected Year 5 revenue | $2,625,000 |
| Cash-flow positive (monthly) | Month ~30-32 |
| Note | Second instrument (Phase 2) significantly improves Year 4-5 economics |

For investors seeking earlier liquidity, PrivDNA's brand, open-source community, established regulatory certifications, and proven model create acquisition value well beyond the sum of financial returns. A multi-location PrivDNA with demonstrated demand and a privacy-sovereign brand in a post-23andMe market is a strategic acquisition target for health systems, concierge medicine platforms, and privacy-focused technology companies.

---

# XIV. APPENDICES

## Appendix A: Glossary of Key Terms

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

## Appendix B: Regulatory Timeline

| Month | Action |
|-------|--------|
| 0 | Entity formation (Delaware C-Corp with NY qualification) |
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

## Appendix C: Team Bios

*[To be completed with founding team information]*

## Appendix D: Letters of Intent

*[To be completed with referral partner LOIs and potential customer interest]*

## Appendix E: References and Sources

### Market Data
- Precedence Research, "Consumer Genomics Market," 2025
- 360iResearch, "Consumer Genomics Market," 2025
- Grand View Research, "Whole Genome Sequencing Market Report," 2025
- Grand View Research, "Predictive Genetic Testing and Consumer Wellness Genomics Market," 2025

### Privacy and Consumer Sentiment
- Pew Research Center, "About Half of Americans Are OK With DNA Testing Companies Sharing User Data With Law Enforcement," 2020
- Deloitte, "Consumer Privacy and Security Survey," 2025
- Statista, "U.S. Adults Willingness to Pay for Data Protection," 2024
- PLOS ONE, "Evolving Public Views on Genomic Database Governance," 2020
- Taylor & Francis, "Public Concerns About DTC DNA Test Kits," 2025

### 23andMe
- NPR, "23andMe Files for Bankruptcy," March 2025
- CNBC, "Regeneron to Buy 23andMe for $256 Million," May 2025
- Foley Hoag, "23andMe Bankruptcy Update," July 2025
- Science, "The Precarious Future of Consumer Genetic Privacy," 2025

### Regulatory
- NIST SP 800-88 Revision 2, "Guidelines for Media Sanitization," September 2025
- NYSDOH Wadsworth Center, CLEP Application Guidance
- CMS, CLIA Certification Requirements (42 CFR Part 493)
- NYC Department of City Planning, "City of Yes for Economic Opportunity," 2024-2025
- Journal of Molecular Diagnostics, "Guide to CLEP Approval for NGS Assays," 2025

### Technology
- Illumina, NextSeq 1000/2000 Product Specifications
- AMD, EPYC 9004 Series Processor Documentation
- Samsung Semiconductor, PM9A3 NVMe Datasheet
- NVIDIA, Clara Parabricks Genomics Acceleration Documentation
- Kingston Technology, IronKey D500S Product Specifications

---

**END OF DOCUMENT**

*PrivDNA | PrivDNA.com | New York, New York*
*Confidential -- For Intended Recipients Only*
