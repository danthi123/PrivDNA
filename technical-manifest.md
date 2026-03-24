# PrivDNA Technical Manifest

**Air-Gapped Whole Genome Sequencing Infrastructure**
**Version 1.0 | March 2026**

---

## TABLE OF CONTENTS

1. [Hardware Bill of Materials](#1-hardware-bill-of-materials)
2. [Server Architecture](#2-server-architecture)
3. [Network Topology and Air-Gap Enforcement](#3-network-topology-and-air-gap-enforcement)
4. [Open Source Software Stack](#4-open-source-software-stack)
5. [Pipeline Flowchart](#5-pipeline-flowchart)
6. [Data Destruction Protocol](#6-data-destruction-protocol)
7. [Physical Security Specifications](#7-physical-security-specifications)
8. [Encrypted Delivery Media](#8-encrypted-delivery-media)
9. [Environmental Requirements](#9-environmental-requirements)
10. [Deployment Checklist](#10-deployment-checklist)

---

# 1. HARDWARE BILL OF MATERIALS

## 1.1 Sequencing Equipment

| # | Item | Model / Part Number | Qty | Unit Cost | Total |
|---|------|-------------------|-----|-----------|-------|
| 1 | Sequencer | Illumina NextSeq 2000 | 1 | $335,000 | $335,000 |
| 2 | Fluorometer | Thermo Fisher Qubit 4 (Q33226) | 1 | $4,000 | $4,000 |
| 3 | Fragment Analyzer | Agilent TapeStation 4150 (G2992AA) | 1 | $16,000 | $16,000 |
| 4 | Thermal Cycler | Bio-Rad T100 (1861096) | 1 | $3,500 | $3,500 |
| 5 | Centrifuge | Eppendorf 5810R (with A-4-81 rotor) | 1 | $6,000 | $6,000 |
| 6 | Microcentrifuge | Eppendorf 5424R (refrigerated) | 1 | $3,500 | $3,500 |
| 7 | Pipettes (single-channel) | Eppendorf Research Plus (0.5-10, 10-100, 100-1000 uL) | 1 set | $1,700 | $1,700 |
| 8 | Pipette (multichannel) | Eppendorf Research Plus 8-channel | 1 | $1,500 | $1,500 |
| 9 | Vortex Mixer | Scientific Industries Vortex-Genie 2 | 1 | $500 | $500 |
| | | | | **Subtotal** | **$371,700** |

## 1.2 Compute Infrastructure

| # | Item | Model / Part Number | Qty | Unit Cost | Total |
|---|------|-------------------|-----|-----------|-------|
| 10 | CPU | AMD EPYC 9654 96C/192T (100-000000789) | 2 | $10,000 | $20,000 |
| 11 | Server Chassis | Supermicro AS-2125HS-TNR (2U, 24x NVMe, dual SP5) | 1 | $5,000 | $5,000 |
| 12 | RAM | Samsung 64GB DDR5-4800 ECC RDIMM (M321R8GA0BB0-CQK) | 16 | $300 | $4,800 |
| 13 | NVMe Storage | Samsung PM9A3 7.68TB U.2 (MZQL27T6HBLA-00A07) | 24 | $4,899 | $117,576 |
| 14 | GPU | NVIDIA A100 80GB PCIe (A100-PCIE-80GB) | 1 | $13,000 | $13,000 |
| 15 | TPM Module | Supermicro TPM 2.0 Infineon (AOM-TPM-9670V) | 1 | $50 | $50 |
| | | | | **Subtotal** | **$160,426** |

## 1.3 Network and Security

| # | Item | Model / Part Number | Qty | Unit Cost | Total |
|---|------|-------------------|-----|-----------|-------|
| 16 | Managed Switch | Cisco Catalyst 1000 (C1000-8T-2G-L) | 1 | $325 | $325 |
| 17 | Firewall | Netgate 6100 MAX (pfSense+) | 1 | $949 | $949 |
| 18 | Patch Cables | Cat6A Shielded (various lengths) | 10 | $15 | $150 |
| 19 | USB Port Blockers | SmartKeeper USB-A Port Blocker (10-pack + key) | 2 | $25 | $50 |
| 20 | USB Port Blockers | SmartKeeper USB-C Port Blocker (10-pack + key) | 1 | $25 | $25 |
| 21 | Tamper-Evident Seals | Numbered serialized bolt seals (50-pack) | 1 | $50 | $50 |
| 22 | Tamper-Evident Tape | Void-if-removed security tape (2 rolls) | 1 | $30 | $30 |
| | | | | **Subtotal** | **$1,579** |

## 1.4 Power and Cooling

| # | Item | Model / Part Number | Qty | Unit Cost | Total |
|---|------|-------------------|-----|-----------|-------|
| 23 | UPS | Eaton 9PX 3000VA/3000W (9PX3000RT) | 1 | $3,500 | $3,500 |
| 24 | Extended Battery | Eaton 9PXEBM72RT2U | 1 | $1,500 | $1,500 |
| 25 | Server Rack | Eaton SmartRack 42U (SR42UB) | 1 | $1,800 | $1,800 |
| 26 | Room Cooling | Mini-split AC (12,000-15,000 BTU) | 1 | $2,500 | $2,500 |
| 27 | Environmental Monitor | APC NetBotz 250 (temp, humidity, intrusion) | 1 | $650 | $650 |
| | | | | **Subtotal** | **$9,950** |

## 1.5 Customer Delivery Media (Initial Inventory)

| # | Item | Model / Part Number | Qty | Unit Cost | Total |
|---|------|-------------------|-----|-----------|-------|
| 28 | Encrypted USB (primary) | Kingston IronKey D500S 512GB (FIPS 140-3 L3) | 25 | $390 | $9,750 |
| 29 | Encrypted USB (alternative) | Apricorn Aegis Secure Key 3NX 128GB (FIPS 140-2 L3) | 10 | $179 | $1,790 |
| | | | | **Subtotal** | **$11,540** |

## 1.6 TOTAL HARDWARE BOM

| Category | Total |
|----------|-------|
| Sequencing Equipment | $371,700 |
| Compute Infrastructure | $160,426 |
| Network and Security | $1,579 |
| Power and Cooling | $9,950 |
| Delivery Media (initial) | $11,540 |
| **GRAND TOTAL** | **$555,195** |

---

# 2. SERVER ARCHITECTURE

## 2.1 System Overview

```
+------------------------------------------------------------------+
|  Supermicro AS-2125HS-TNR (2U Rack Server)                       |
|                                                                    |
|  +------------------+  +------------------+                        |
|  | AMD EPYC 9654    |  | AMD EPYC 9654    |                       |
|  | 96C / 192T       |  | 96C / 192T       |                       |
|  | 2.4 / 3.7 GHz    |  | 2.4 / 3.7 GHz    |                       |
|  | 384 MB L3 Cache   |  | 384 MB L3 Cache   |                      |
|  | 360W TDP          |  | 360W TDP          |                      |
|  +------------------+  +------------------+                        |
|                                                                    |
|  RAM: 16x 64GB DDR5-4800 ECC RDIMM = 1,024 GB (1 TB)            |
|  (16 of 24 DIMM slots populated; 8 slots reserved for expansion)  |
|                                                                    |
|  +--------------------------------------------------------------+ |
|  | NVMe Storage Array: 24x Samsung PM9A3 7.68TB U.2             | |
|  | Configuration: RAID-10 (Linux mdadm software RAID)           | |
|  | Raw capacity: 184.3 TB                                       | |
|  | Usable capacity: 92.16 TB                                    | |
|  | Sequential read: 6,900 MB/s per drive                        | |
|  | Sequential write: 4,100 MB/s per drive                       | |
|  | All drives are SEDs with AES-256 encryption enabled           | |
|  +--------------------------------------------------------------+ |
|                                                                    |
|  +--------------------------------------------------------------+ |
|  | GPU: NVIDIA A100 80GB PCIe                                   | |
|  | 80 GB HBM2e | 2 TB/s bandwidth | 300W TDP                   | |
|  | Used for: Clara Parabricks genomics acceleration              | |
|  +--------------------------------------------------------------+ |
|                                                                    |
|  TPM 2.0 (Infineon SLB9670) - Secure Boot, measured boot         |
|  Redundant PSUs (2x 2000W+)                                      |
+------------------------------------------------------------------+
```

## 2.2 Storage Layout

```
/dev/md0  (RAID-10, 92 TB usable)
  |
  +-- /data/bcl/          Raw BCL files from sequencer (temporary)
  +-- /data/fastq/        Demultiplexed FASTQ files (temporary)
  +-- /data/processing/   Active pipeline working directory
  +-- /data/delivery/     Staged files for USB transfer
  +-- /data/qc/           QC reports and logs
  +-- /reference/         GRCh38 + BWA-MEM2 index + GATK resources (~60 GB)
  +-- /software/          Singularity images + Nextflow + tools (~40 GB)
  +-- /logs/              Pipeline execution logs and audit trail
```

## 2.3 RAID Configuration

```bash
# RAID-10 creation (24 drives, 12 mirrored pairs)
mdadm --create /dev/md0 --level=10 --raid-devices=24 \
  /dev/nvme0n1 /dev/nvme1n1 /dev/nvme2n1 /dev/nvme3n1 \
  /dev/nvme4n1 /dev/nvme5n1 /dev/nvme6n1 /dev/nvme7n1 \
  /dev/nvme8n1 /dev/nvme9n1 /dev/nvme10n1 /dev/nvme11n1 \
  /dev/nvme12n1 /dev/nvme13n1 /dev/nvme14n1 /dev/nvme15n1 \
  /dev/nvme16n1 /dev/nvme17n1 /dev/nvme18n1 /dev/nvme19n1 \
  /dev/nvme20n1 /dev/nvme21n1 /dev/nvme22n1 /dev/nvme23n1

# Format with XFS (optimized for large files)
mkfs.xfs -f /dev/md0

# Mount
mount /dev/md0 /data
```

**Fault tolerance:** RAID-10 tolerates the loss of one drive per mirrored pair (up to 12 simultaneous failures if each occurs in a different pair). In practice, 1-2 drive failures are handled transparently with hot-swap replacement.

## 2.4 Power Budget

| Component | Typical (W) | Peak (W) |
|-----------|------------|----------|
| 2x AMD EPYC 9654 (360W TDP each) | 500 | 720 |
| 24x Samsung PM9A3 NVMe (8W each) | 120 | 192 |
| 16x 64GB DDR5 RDIMM (~5W each) | 60 | 80 |
| NVIDIA A100 80GB PCIe (300W TDP) | 150 | 300 |
| Motherboard, fans, miscellaneous | 100 | 150 |
| **Server subtotal** | **930** | **1,442** |
| Illumina NextSeq 2000 | 400 | 800 |
| Network equipment | 30 | 50 |
| UPS overhead (~10%) | 136 | 229 |
| **Total system** | **1,496** | **2,521** |

**Annual electricity cost:** ~1,500W avg x 8,760 hrs x $0.22/kWh (NYC commercial rate) = ~$2,887/year

**UPS runtime at peak load (2,521W):**
- Base unit (Eaton 9PX 3000VA): ~7.5 minutes
- With extended battery module: ~18-22 minutes

---

# 3. NETWORK TOPOLOGY AND AIR-GAP ENFORCEMENT

## 3.1 Network Diagram

```
                    *** NO INTERNET CONNECTION ***
                    *** NO WI-FI / BLUETOOTH ***

+------------------------------------------------------------------+
|                     ISOLATED LAB NETWORK                          |
|                     VLAN 10: 10.0.10.0/24                         |
|                                                                    |
|  +------------------+          +------------------+                |
|  | Illumina         |          | Compute Server   |               |
|  | NextSeq 2000     |          | (Supermicro)     |               |
|  | 10.0.10.10       | <------> | 10.0.10.20       |               |
|  +------------------+   GbE    +------------------+                |
|          |                              |                          |
|          +----------+  +---------------+                           |
|                     |  |                                           |
|               +-----+--+------+                                    |
|               | Cisco Catalyst |                                   |
|               | C1000-8T-2G-L  |                                   |
|               | 10.0.10.1      |                                   |
|               +-------+--------+                                   |
|                       |                                            |
|               +-------+--------+                                   |
|               | Netgate 6100   |                                   |
|               | MAX (pfSense)  |                                   |
|               | NO WAN CONFIG  |                                   |
|               | NO GATEWAY     |                                   |
|               +----------------+                                   |
|                                                                    |
|  +------------------+                                              |
|  | Transfer         |  USB-only data export station                |
|  | Workstation      |  (all other USB ports blocked)               |
|  | 10.0.10.30       |                                              |
|  +------------------+                                              |
|                                                                    |
+------------------------------------------------------------------+
```

## 3.2 Air-Gap Enforcement Layers

### Layer 1: Physical

| Control | Implementation |
|---------|---------------|
| No internet cable | No Ethernet cable from lab network to building network or ISP |
| No wireless | No Wi-Fi adapters installed; Bluetooth disabled in BIOS; no wireless-capable peripherals |
| Cable audit | All network cables are visible and labeled; monthly physical inspection |
| Separate power circuit | Lab equipment on dedicated electrical circuit (mitigates power-line communication attacks) |
| Signage | "AIR-GAPPED ENVIRONMENT -- NO PERSONAL DEVICES" posted at entry |

### Layer 2: Logical (Network)

| Control | Implementation |
|---------|---------------|
| No WAN interface | pfSense firewall has no WAN configuration; all WAN ports physically disconnected |
| No default gateway | Server and sequencer have no default route configured |
| VLAN isolation | Sequencer and compute server on VLAN 10; transfer workstation on VLAN 20 with ACL-restricted access |
| DNS disabled | No DNS server configured; no hostname resolution possible |
| DHCP disabled | Static IP addressing only |

### Layer 3: Endpoint (BIOS/OS)

| Control | Implementation |
|---------|---------------|
| BIOS password | UEFI admin password set; requires physical presence to change |
| Secure Boot | Enabled; only signed OS bootloaders permitted |
| Boot order locked | NVMe only; USB boot disabled; PXE boot disabled |
| USB port control | SmartKeeper physical blockers on all unused USB ports |
| Kernel modules | USB mass storage module disabled except on transfer workstation |
| Firewall (host) | iptables rules: DROP all INPUT/OUTPUT except VLAN 10 traffic on specific ports |

### Layer 4: Data Transfer Protocol

All data ingress/egress follows this controlled process:

**Data OUT (delivery to customer):**
1. Bioinformatics Engineer copies deliverables to transfer workstation via VLAN 20
2. Transfer workstation has a single unblocked USB-A port
3. Engineer inserts customer's IronKey D500S, authenticates with PIN
4. Files are copied and SHA-256 checksums are verified
5. USB drive is ejected and sealed in tamper-evident packaging
6. Transfer workstation local copy is cryptographically erased

**Data IN (software updates, reference data):**
1. Updates are prepared on a separate, internet-connected staging machine (NOT in the lab)
2. Files are copied to a dedicated "update USB drive" (separate from customer drives)
3. Files are checksummed (SHA-256) on the staging machine
4. Update USB is scanned on a quarantine workstation before insertion into the air-gapped network
5. Checksums are verified on the air-gapped server
6. Update USB is wiped after transfer

---

# 4. OPEN SOURCE SOFTWARE STACK

## 4.1 Operating System

| Component | Version | License |
|-----------|---------|---------|
| Ubuntu Server LTS | 24.04.x | GPL / Various |
| Linux Kernel | 6.8.x | GPL v2 |

Ubuntu Server LTS provides a stable, well-supported base with 10-year security updates. Installed from physical media (USB) during initial server setup. All subsequent updates are applied via air-gap transfer protocol (Section 3.2, Layer 4).

## 4.2 Containerization

| Component | Version | License |
|-----------|---------|---------|
| Singularity (Apptainer) | 1.3.x | BSD 3-Clause |

Singularity/Apptainer is the standard containerization platform for HPC and bioinformatics. Unlike Docker, it runs as unprivileged user processes, does not require a daemon, and integrates cleanly with HPC job schedulers. All pipeline tools are packaged as Singularity .sif images, built on an internet-connected staging machine and transferred to the air-gapped server.

## 4.3 Pipeline Orchestration

| Component | Version | License |
|-----------|---------|---------|
| Nextflow | 24.x | Apache 2.0 |
| nf-core/sarek (WGS pipeline) | 3.x | MIT |
| Java Runtime (for Nextflow) | OpenJDK 17 | GPL v2 + CPE |

nf-core/sarek is a production-validated, community-maintained WGS/WES analysis pipeline with contributions from dozens of institutions. It implements the GATK Best Practices workflow with full configurability.

**Air-gapped deployment:**
```bash
# On internet-connected staging machine:
nf-core download sarek --revision 3.x --outdir ./sarek-offline \
  --container singularity --compress none

# Transfer ./sarek-offline/ to air-gapped server via update USB
# Run on air-gapped server:
nextflow run ./sarek-offline/workflow/ \
  -profile singularity \
  --input samplesheet.csv \
  --genome GRCh38 \
  --tools haplotypecaller \
  --outdir /data/processing/run_001/
```

## 4.4 Bioinformatics Tools

| Tool | Version | License | Role |
|------|---------|---------|------|
| BCL Convert | 4.4.6 | Illumina proprietary (free) | BCL to FASTQ conversion and demultiplexing |
| BWA-MEM2 | 2.2.1 | MIT | Short-read alignment to GRCh38 reference |
| GATK | 4.6.1.0 | BSD 3-Clause / Apache 2.0 | Variant calling (HaplotypeCaller), BQSR, deduplication |
| samtools | 1.23.1 | MIT/BSD | BAM sorting, indexing, statistics |
| bcftools | 1.23.1 | MIT/BSD | VCF manipulation, filtering, annotation |
| htslib | 1.23.1 | MIT/BSD | C library for BAM/CRAM/VCF I/O |
| FastQC | 0.12.1 | GPL v3 | Per-sample FASTQ quality control |
| MultiQC | 1.33 | GPL v3 | Aggregate QC report generation |
| NVIDIA Clara Parabricks | 4.x | Proprietary (free for research) | GPU-accelerated alignment and variant calling |

**License note:** BCL Convert and Clara Parabricks are proprietary but free to use. All other tools in the critical path (BWA-MEM2, GATK, samtools, bcftools) are fully open source. If Parabricks licensing becomes restrictive, the CPU-only pipeline (BWA-MEM2 + GATK) is fully functional with longer processing times (8-16 hours vs. 45 minutes).

## 4.5 Reference Data

| Resource | Version/Build | Size | Source |
|----------|-------------|------|--------|
| Human reference genome | GRCh38 (Homo_sapiens_assembly38.fasta) | 3.3 GB | Broad Institute resource bundle |
| BWA-MEM2 index | Built from GRCh38 | 30 GB | Generated locally |
| dbSNP | Build 155+ | ~5 GB | NCBI |
| HapMap 3.3 | GRCh38-lifted | ~1 GB | Broad Institute |
| 1000 Genomes high-confidence SNPs | GRCh38 | ~2 GB | Broad Institute |
| Mills and 1000G gold-standard indels | GRCh38 | ~2 GB | Broad Institute |
| Axiom Exome Plus genotypes | GRCh38 | ~3 GB | Broad Institute |
| **Total reference data** | | **~50-60 GB** | |

All reference data is downloaded once on the staging machine, checksummed, transferred to the air-gapped server, and re-verified. Reference data does not change between customer runs.

---

# 5. PIPELINE FLOWCHART

## 5.1 End-to-End Pipeline

```
SAMPLE INTAKE
    |
    v
[Saliva/Buccal Swab Collection]
    |
    v
[DNA Extraction]
    |
    v
[QC: Qubit Quantification + TapeStation Fragment Analysis]
    |
    |-- FAIL --> Re-extract or re-collect
    |
    v  PASS
[Library Preparation: Illumina DNA Prep]
    |
    v
[QC: Library Qubit + TapeStation]
    |
    |-- FAIL --> Re-prep library
    |
    v  PASS
[Pool Libraries (up to 3 per P3 flow cell)]
    |
    v
[Load Flow Cell on NextSeq 2000]
    |
    v
[SEQUENCING RUN: ~29-35 hours]
    |
    v
=== DATA ENTERS AIR-GAPPED SERVER ===
    |
    v
[Stage 1: BCL Convert v4.4.6]
  BCL -> FASTQ (demux + adapter trim)
  Time: 30-90 min
    |
    v
[Stage 2: FastQC v0.12.1]
  Per-sample FASTQ quality metrics
  Time: 10-20 min
    |
    v
[Stage 3: BWA-MEM2 v2.2.1]
  FASTQ -> Aligned BAM (to GRCh38)
  Time: 2-4 hrs CPU | ~10 min GPU
    |
    v
[Stage 4: samtools sort v1.23.1]
  Coordinate-sort BAM
  Time: 30-60 min CPU | ~5 min GPU
    |
    v
[Stage 5: GATK MarkDuplicates v4.6.1.0]
  Flag/remove PCR duplicates
  Time: 30-60 min
    |
    v
[Stage 6: GATK BaseRecalibrator + ApplyBQSR]
  Base quality score recalibration
  Known sites: dbSNP, Mills, known indels
  Time: 1-2 hrs CPU | ~5 min GPU
    |
    v
[Stage 7: GATK HaplotypeCaller]
  Variant calling in -ERC GVCF mode
  Scatter-gather across ~50 genomic intervals
  Time: 3-6 hrs CPU | ~10 min GPU
    |
    v
[Stage 8: GATK GenotypeGVCFs]
  gVCF -> Raw VCF
  Time: 30-60 min
    |
    v
[Stage 9: GATK VQSR / Hard Filters]
  Variant quality score recalibration
  Time: 15-30 min
    |
    v
[Stage 10: MultiQC v1.33]
  Aggregate all QC metrics into HTML report
  Time: 2-5 min
    |
    v
[QC REVIEW: Lab Director sign-off]
  - Coverage >= 30x mean
  - <5% genome below 10x
  - Q30 >= 90%
  - No contamination (VerifyBamID)
    |
    |-- FAIL --> Re-sequence (new flow cell)
    |
    v  PASS
[STAGE TO DELIVERY DIRECTORY]
  Copy BAM, VCF, gVCF, QC report, pipeline manifest
  Generate SHA-256 checksums for all files
    |
    v
[TRANSFER TO CUSTOMER USB]
  IronKey D500S via controlled transfer workstation
  Verify checksums on USB
    |
    v
[CUSTOMER HANDOFF + WITNESSED DESTRUCTION]
  Cryptographic erasure of all on-premise copies
  Certificate of Destruction generated
    |
    v
=== NO DATA REMAINS ON PREMISE ===
```

## 5.2 Processing Time Summary

| Path | Total Time (30x genome) |
|------|------------------------|
| CPU-only (BWA-MEM2 + GATK, 128 threads) | 8-16 hours |
| GPU-accelerated (Parabricks, A100 80GB) | 30-45 minutes |
| **Typical (GPU primary, CPU fallback)** | **45 minutes** |

## 5.3 Storage Lifecycle Per Genome

| Phase | Files | Size | Duration |
|-------|-------|------|----------|
| Sequencing | BCL (shared per run) | 200-400 GB/run | Duration of run + conversion |
| Demultiplexing | FASTQ (compressed) | 60-90 GB | Until BAM validated |
| Alignment + processing | Intermediate BAMs | 100-120 GB | Pipeline duration only |
| Deliverables staging | BAM + VCF + gVCF + QC | 100-120 GB | Until USB transfer complete |
| **Post-delivery** | **Nothing** | **0 GB** | **Permanent** |

**Peak concurrent storage:** Processing 3 genomes simultaneously (one full P3 run) requires ~1.5-2 TB of working storage. With 92 TB usable, the server can handle 15-20 concurrent genomes with room to spare.

---

# 6. DATA DESTRUCTION PROTOCOL

## 6.1 Standard: NIST SP 800-88 Revision 2 (September 2025)

PrivDNA follows the **Purge** sanitization level using **cryptographic erasure** on self-encrypting NVMe drives.

### Why Not DoD 5220.22-M?

The DoD 5220.22-M standard (3-pass or 7-pass overwrite) was deprecated by the DoD itself in 2007 for classified media. It predates SSD/NVMe technology and does not address:
- Wear-leveling reserves (hidden spare blocks on SSDs)
- Over-provisioned storage areas
- Controller-managed bad block remapping

NIST SP 800-88 Rev. 2 is the current authoritative standard and specifically addresses modern flash media.

## 6.2 Cryptographic Erasure Process

### Prerequisites
- All NVMe drives must be self-encrypting drives (SEDs) with AES-256 encryption
- Encryption must be enabled from initial drive deployment (before any customer data is written)
- Drive firmware must be current and validated

### Procedure

```
STEP 1: DELIVERY VERIFICATION
  [ ] All deliverables confirmed on customer USB drive
  [ ] SHA-256 checksums match between server and USB
  [ ] Customer acknowledges receipt

STEP 2: FILE-LEVEL DELETION
  [ ] rm -rf /data/processing/<sample_id>/
  [ ] rm -rf /data/fastq/<sample_id>/
  [ ] rm -rf /data/delivery/<sample_id>/
  [ ] Verify: find /data/ -name "*<sample_id>*" returns empty

STEP 3: CRYPTOGRAPHIC ERASURE
  [ ] For each SED containing customer data:
      nvme sanitize /dev/nvmeXn1 --sanact=4  (Crypto Erase)
      OR
      sedutil-cli --revertTPer /dev/nvmeXn1  (TCG Opal revert)
  [ ] New DEK generated; old DEK permanently discarded
  [ ] Completion time: <5 seconds per drive

STEP 4: VERIFICATION
  [ ] Post-erasure read of affected LBAs returns zeros/random
  [ ] SMART sanitize status confirms completion
  [ ] No residual file fragments detectable

STEP 5: DOCUMENTATION
  [ ] Certificate of Destruction generated:
      - Sample ID
      - Drive serial numbers
      - Sanitization method: "NIST SP 800-88 Rev. 2 Purge
        (Cryptographic Erasure, AES-256 SED)"
      - Timestamp (UTC)
      - Technician name and ID
      - Verification result: PASS/FAIL
  [ ] Certificate printed and provided to customer
  [ ] Audit trail entry logged in LIMS (immutable)
```

## 6.3 End-of-Life Drive Destruction

When NVMe drives reach end of service life (SMART warnings, warranty expiration, or capacity replacement):

1. Cryptographic erasure performed (as above)
2. Drives physically removed from server
3. Drives sent to certified media destruction vendor (NAID AAA certified)
4. Physical destruction via industrial shredding (particle size <2mm)
5. Certificate of Physical Destruction received and filed
6. Destruction method: NIST SP 800-88 Rev. 2 **Destroy** level

---

# 7. PHYSICAL SECURITY SPECIFICATIONS

## 7.1 Facility Access Control

| Zone | Access Method | Authorized Personnel |
|------|-------------|---------------------|
| Customer reception | Open during business hours | All |
| Laboratory (behind glass wall) | Keycard + biometric (fingerprint) | Lab Tech, Bioinformatics Engineer, Lab Director |
| Server room (within lab) | Keycard + PIN + biometric | Bioinformatics Engineer, Lab Director only |
| Transfer workstation | Biometric only | Bioinformatics Engineer only |

## 7.2 Surveillance

| System | Specification |
|--------|-------------|
| Cameras | Minimum 4x: entry/exit, customer area, lab interior, server rack |
| Resolution | Minimum 1080p, infrared for 24/7 coverage |
| Storage | 90-day rolling retention on separate, secured NVR |
| Tamper resistance | Cameras in vandal-proof housings |
| Access | Lab Director and designated security admin only |

## 7.3 Server Rack Security

| Control | Implementation |
|---------|---------------|
| Rack locking | Keyed front, rear, and side panels (included with SR42UB) |
| Tamper-evident seals | Numbered bolt seals on all rack door latches; logged in security register |
| Intrusion detection | Chassis intrusion switch (Supermicro motherboard feature); alerts to local monitoring |
| Environmental monitoring | APC NetBotz 250: temperature, humidity, door-open alerts |
| Cable security | All cables routed through rack cable management; zip-tied and sealed at endpoints |

## 7.4 BIOS/Firmware Security

| Setting | Configuration |
|---------|-------------|
| BIOS admin password | Set; required for any BIOS changes |
| Secure Boot | Enabled |
| Boot order | NVMe only; USB boot disabled; PXE disabled |
| TPM 2.0 | Enabled; used for measured boot and disk encryption key storage |
| Remote management (IPMI/BMC) | Disabled; network interface physically disconnected |
| USB controller | Enabled only for keyboard/mouse; mass storage class disabled in OS |

---

# 8. ENCRYPTED DELIVERY MEDIA

## 8.1 Primary: Kingston IronKey D500S

| Specification | Value |
|--------------|-------|
| Certification | FIPS 140-3 Level 3 (pending; currently certified to FIPS 140-3 L3) |
| Encryption | XTS-AES 256-bit (hardware) |
| Authentication | Onboard alphanumeric keypad (PIN entry, OS-independent) |
| Brute force protection | Crypto-erase after configurable failed PIN attempts |
| Capacities used | 512 GB (standard delivery); 256 GB (VCF-only delivery) |
| Water resistance | IP67/IP68 |
| Tamper protection | Epoxy-potted circuitry (physical tamper evidence) |
| Supply chain | Designed and assembled in USA (Kingston, California) |
| Interface | USB 3.2 Gen 1 (USB-A) |
| Read speed | Up to 260 MB/s |
| Write speed | Up to 190 MB/s |

### Customer Instructions (Included with Drive)

1. Press any key to wake the keypad
2. Enter your PIN (set during handoff appointment)
3. Green LED confirms unlock; plug into computer
4. Drive appears as standard USB storage
5. After 10 consecutive failed PIN attempts, drive performs crypto-erase (all data permanently destroyed)
6. Drive auto-locks when unplugged

## 8.2 Alternative: Apricorn Aegis Secure Key 3NX

For customers who prefer a lower-cost option or need smaller capacity (VCF-only delivery):

| Specification | Value |
|--------------|-------|
| Certification | FIPS 140-2 Level 3 |
| Encryption | AES-XTS 256-bit (hardware) |
| Authentication | Onboard PIN keypad |
| Capacities | 128 GB (sufficient for VCF + gVCF only, ~15 GB) |
| Cost | ~$179 |

## 8.3 Delivery Size Requirements

| Delivery Tier | Contents | Size | Recommended Drive |
|--------------|----------|------|-------------------|
| **Full Genome** (default) | BAM + VCF + gVCF + QC + manifest | ~110 GB | IronKey D500S 512 GB |
| **Variants Only** | VCF + gVCF + QC + manifest | ~12 GB | Aegis 3NX 128 GB |

---

# 9. ENVIRONMENTAL REQUIREMENTS

## 9.1 Laboratory Environment

| Parameter | Requirement | Notes |
|-----------|-----------|-------|
| Temperature | 19-25 C (66-77 F) | Illumina NextSeq 2000 operating range |
| Humidity | 20-80% RH (non-condensing) | Illumina specification |
| Ventilation | Dedicated HVAC zone; no air recirculation from lab | Prevents contamination |
| Air pressure | Neutral or slight negative relative to customer area | Prevents contamination escape |
| Lighting | Standard fluorescent/LED | No special requirements |
| Flooring | Sealed, non-porous (epoxy or vinyl) | Required for clinical lab; easy decontamination |
| Bench surfaces | Chemical-resistant, non-porous | Required for BSL-1 |
| Sink | Dedicated handwashing sink in lab area | Required for BSL-1 |

## 9.2 Server Room Environment

| Parameter | Requirement | Notes |
|-----------|-----------|-------|
| Temperature | 18-27 C (64-80 F) | ASHRAE A1 recommended range |
| Humidity | 20-80% RH (non-condensing) | ASHRAE A1 recommended range |
| Cooling | Dedicated mini-split AC or in-row cooling; 12,000-15,000 BTU | Must dissipate ~3 kW continuous heat load |
| Power | Dedicated 30A circuit; clean power via UPS | Isolates from building electrical noise |
| Fire suppression | Clean agent (FM-200 or Novec 1230) recommended | Protects equipment without water damage |
| Raised floor | Optional but recommended | Enables under-floor cable management and cooling |

## 9.3 Customer Area Environment

| Parameter | Requirement | Notes |
|-----------|-----------|-------|
| Temperature | 20-24 C (68-75 F) | Comfortable retail environment |
| Lighting | Warm, retail-quality lighting | Reinforces premium positioning |
| Acoustic isolation | Glass wall should provide basic sound dampening | Lab equipment noise should not dominate customer area |
| Seating | Comfortable consultation chairs for 2-4 customers | Appointments may include companions |

---

# 10. DEPLOYMENT CHECKLIST

## 10.1 Pre-Deployment (Internet-Connected Staging Machine)

```
[ ] Download and verify Ubuntu Server 24.04 LTS ISO
[ ] Download Singularity/Apptainer .deb packages and dependencies
[ ] Download Nextflow binary and Java Runtime
[ ] Run: nf-core download sarek --container singularity
[ ] Download all reference data:
    [ ] GRCh38 reference FASTA + .fai + .dict
    [ ] BWA-MEM2 index (pre-built or build locally)
    [ ] GATK resource bundle (dbSNP, HapMap, 1000G, Mills)
[ ] Download BCL Convert 4.4.6 .rpm/.deb
[ ] Download NVIDIA Clara Parabricks installer
[ ] Download NVIDIA driver for A100 (data center driver branch)
[ ] Download samtools, bcftools, htslib source tarballs
[ ] Download FastQC, MultiQC packages
[ ] Generate SHA-256 checksums for ALL downloaded files
[ ] Copy everything to a dedicated "deployment USB drive"
[ ] Verify total size: ~80-100 GB
```

## 10.2 Server Hardware Setup

```
[ ] Unpack and rack Supermicro AS-2125HS-TNR in Eaton SmartRack
[ ] Install 2x AMD EPYC 9654 CPUs
[ ] Install 16x 64GB DDR5 RDIMM (slots per motherboard manual)
[ ] Install 24x Samsung PM9A3 7.68TB NVMe in hot-swap bays
[ ] Install NVIDIA A100 80GB PCIe GPU
[ ] Install TPM 2.0 module
[ ] Connect redundant PSUs to UPS
[ ] Connect UPS to dedicated power circuit
[ ] Install Eaton extended battery module
[ ] Connect server to Cisco switch via Cat6A
[ ] Verify no other cables connected to switch
[ ] Power on; enter BIOS
```

## 10.3 BIOS Configuration

```
[ ] Set BIOS admin password
[ ] Enable Secure Boot
[ ] Set boot order: NVMe only
[ ] Disable USB boot
[ ] Disable PXE boot
[ ] Enable TPM 2.0
[ ] Disable onboard Wi-Fi/Bluetooth (if present)
[ ] Disable IPMI/BMC network interface
[ ] Enable chassis intrusion detection
[ ] Enable SED encryption on all NVMe drives (if not factory-enabled)
[ ] Save and exit
```

## 10.4 Operating System Installation

```
[ ] Boot from USB (temporarily enable USB boot for installation only)
[ ] Install Ubuntu Server 24.04 LTS
    [ ] Full-disk encryption (LUKS) using TPM-backed key
    [ ] Minimal server installation (no GUI, no snap)
    [ ] Static IP: 10.0.10.20/24
    [ ] No default gateway
    [ ] No DNS servers
[ ] Re-enter BIOS and disable USB boot again
[ ] Create RAID-10 array with mdadm
[ ] Format and mount /data (XFS)
[ ] Create directory structure:
    /data/{bcl,fastq,processing,delivery,qc}
    /reference/
    /software/
    /logs/
```

## 10.5 Software Installation (Air-Gapped)

```
[ ] Insert deployment USB drive
[ ] Verify all SHA-256 checksums against staging machine manifest
[ ] Install Singularity/Apptainer from .deb
[ ] Install Java Runtime (OpenJDK 17)
[ ] Install Nextflow binary to /usr/local/bin/
[ ] Copy nf-core/sarek offline bundle to /software/
[ ] Install NVIDIA driver (run .run installer)
[ ] Install Clara Parabricks
[ ] Verify GPU: nvidia-smi shows A100 80GB
[ ] Copy reference data to /reference/
[ ] Verify reference data checksums
[ ] Install BCL Convert
[ ] Install samtools, bcftools, htslib from source
[ ] Install FastQC, MultiQC
[ ] Remove deployment USB drive
[ ] Block USB mass storage: echo "blacklist usb-storage" >> /etc/modprobe.d/blacklist.conf
[ ] Reboot and verify all services
```

## 10.6 Validation Runs

```
[ ] Obtain reference sample (e.g., NA12878/HG001 from Coriell Institute)
[ ] Run full pipeline: extraction -> library prep -> sequencing -> analysis
[ ] Verify:
    [ ] FASTQ quality (FastQC: all metrics in expected ranges)
    [ ] Alignment rate >99%
    [ ] Mean coverage >= 30x
    [ ] >95% of genome covered at >= 10x
    [ ] Q30 >= 90%
    [ ] Variant concordance with known NA12878 truth set (GIAB)
    [ ] All deliverable files generated correctly
    [ ] SHA-256 checksums reproducible
[ ] Run cryptographic erasure test:
    [ ] Erase test data
    [ ] Verify no recoverable data
    [ ] Certificate of Destruction generated correctly
[ ] Repeat 3x for statistical confidence
[ ] Document results for CLIA/CLEP/CAP validation package
```

## 10.7 Security Hardening (Final)

```
[ ] Install all USB port blockers on unused ports
[ ] Apply tamper-evident seals to rack doors
[ ] Photograph and log all seal serial numbers
[ ] Verify CCTV coverage of all zones
[ ] Test access control (keycard + biometric) for all doors
[ ] Verify APC NetBotz environmental alerts
[ ] Run penetration test of local network (verify no egress possible)
[ ] Document all configurations in secure operations manual
[ ] Store operations manual in locked safe on-premise
```

---

**END OF TECHNICAL MANIFEST**

*PrivDNA, Inc. | Version 1.0 | March 2026*
*This document contains proprietary technical specifications. Distribution restricted to authorized personnel and investors under NDA.*
