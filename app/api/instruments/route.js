
import mongoose from "mongoose";
import connection from "../../lib/db"  
import instrument from "../../lib/modal/instrument";
import { NextResponse } from "next/server";
// const instruments = [
//   {
//     id: 1,
//     name: 'SCXRD',
//     image:'https://sic.iiti.ac.in/wp-content/uploads/2022/09/IMG20220720123624__1_-removebg-preview.png',
//     info: 'State the art dual core Agilent Technologies (Oxford Diffraction) Super Nova CCD System Access to micro-focus Cu and Mo sources which allows even small-size crystals data collection Oxford Cryosystems which enable temperature range from 90 to 400K High-definition microscopes for the separation and mounting of crystals',
//     status: 'working',
//     charge:100,
//     commertial_charge:50,
//     academic_charge:500,
//     application:["Crystal screening and mounting, including air-sensitive samples","Diffraction data collection under various conditions, including temperatures as low as 90 K","Structure solution, refinement, and interpretation up to publication level","Cambridge Structure Database searching","Structural evaluation of compounds","Lattice information","X-RAY crystallography of proteins"]

    
//   },
//   {
//     id: 2,
//     name: 'Powder X-ray Diffraction',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/09/IMG_20220927_1514581-removebg-preview.png",
//     info: "High-accuracy theta-theta goniometer: Enables omega scans, 2-theta/omega scans, and 2-theta scans with the sample oriented horizontally. Additionally, the two axes are equipped with encoders to enable control of each axis with a resolution of 0.0001.Attachments: Standard Powder XRD attachment, RxRy attachment (for sample tilt alignment, for thin film and rocking curve measurement), Phi-Chi attachment (for thin film, reflectivity).X-ray Generator: 3 kW sealed tube x-ray generator (Max. voltage 60kV, Max. current 50mA, with Cu target) Cross beam optics (CBO): Changing the selection slits allows easy switching between the direct beam for para-focusing (Bragg-Brentano or BB) optics and a monochromatic parallel using a multilayer mirror. Para-focusing optics is applied to the measurement of phase ID analysis and quantitative analysis of powder samples. Parallel beam (PB) optics is applied to the measurement of profile analysis of powder samples, measurement of preferred orientation, measurement of thin film samples, and rocking curve measurement.Detector: (i) 0D Scintillation Counter (point detector), (ii)1D Semiconductor Detector  ",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Lattice parameters, phase identity and phase purity.","Crystallinity, crystal structure, and percent phase composition."]
//   },
//   {
//     id: 3,
//     name: 'X-ray Absorption Fine Structure',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/09/XANES.jpg",
//     info: "EXAFS provides precise local structural information like bond distances, coordination number and type of neighboring atoms, and disorder in crystalline or non-crystalline systems. XANES provides the oxidation state of the absorbing ion, thus providing information related to charging transfer, orbital occupancy, and symmetry around the absorbing ion",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Materials Science","Semiconductors","Biological Science","Nanotechnology","Pharmaceuticals"]
//   },
//   {
//     id: 4,
//     name: 'Energy Dispersive X-Ray Spectroscopy',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/09/IMG_20220720_123701__1_-removebg-preview-1.png",
//     info: "Unique large area SDD sensors Accurate data at the micro- and nanoscales Sensor enclosed in self-contained vacuum assembly" ,
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Elemental and chemical analysis of a sample","Low as well as high energy mapping of nano-particles","Accurate identification and characterization of x-ray electromagnetic spectrum."]
//   },
//   {
//     id: 5,
//     name: 'Wavelength Dispersive Spectroscopy',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/09/IMG20220720123507-e1662550789194.jpg",
//     info: "Optimized element detection for low and high energy X-rays Accurate quantitative analysis below 500ppmLess than 10eV resolution for resolving important overlaps like Sulfur/Molybdenum Rivals EPMA accuracy with WD for trace elements and ED for major elements using XPP quantitative correction algorithms",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Most accurate elemental analysis available for SEM","Easily and unambiguously determines the distribution of all elements in a sample even where peaks overlap","accurate trace element analysis, and optimized element detection for low and high energy X-rays to provide “Microprobe Accuracy on an SEM”"]
//   },
//   {
//     id: 6,
//     name: 'Nuclear Magnetic Resonance(NMR) 500MHz',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/09/IMG_20220921_170948-2048x2048.jpg",
//     info: "Magnet: 11.764 Tesla (Superconducting), 50 mm bore Probes Available: For Solution State NMR 5 mm Broad Band Observe I-Probe & Triple Resonance Inverse Probe with a gradient along Z-axis and Automated Tuning & Matching (ATM).",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["The state-of-the-art AVANCE NEO NMR console with digital lock and 3 independent RF channels providing 150 W 1H/19F transmitter and 600 W transmitters and broadband Preamplifier. In addition 150 W 2H transmitter for deuterium observation and decoupling. It is also equipped with a BCU I unit for on-demand temperature studies ranging from (-40 to 120℃)."]
//   },
//   {
//     id: 7,
//     name: 'Nuclear Magnetic Resonance(NMR) 400MHz',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/10/IMG_20220927_153551-removebg-preview.png",
//     info: "Magnet: 8.96 Tesla (Superconducting), 50 mm bore Probes Available: For Solution State NMR 5 mm Broad Band Fluorine Observe Probe with a gradient along Z-axis and Automated Tuning & Matching (ATM) accessory. 5 mm Broad Band Inverse Probe with a gradient along Z-axis and Automated Tuning & Matching (ATM) accessory.",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["The state-of-the-art Avance III 400 NMR console with digital lock and 2 independent RF channels providing 60 W 1H/19F transmitter and 150 W transmitters and broadband Preamplifier. In addition, a 5 W 2H transmitter for deuterium observation and decoupling."]
//   },
//   {
//     id: 8,
//     name: 'Fourier Transform Infrared Spectrometer (FT-IR)',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/10/FT-IR_2-removebg-preview.png",
//     info: "FT-IR is an analytical instrument (with MIR source, ZnSe beam splitter, and DLaTGS detector) dedicated to identifying materials including polymers, based on the relative amount of energy of key functionalities present in the sample.",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["It enables us to analyze the sample in the frequency ranges between 4000-400 cm-1. This instrument is made to analyze samples in solid form as well as in liquid/gel form. Samples can be analyzed by transmission and ATR methods."]
//   },
//   {
//     id: 9,
//     name: 'Time-Correlated Single Photon Counting (TCSPC)',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/12/IMG_0055-removebg-preview.png",
//     info: "Cell holder with facility for recirculating liquid temperature control. Picobrite Diode Laser with a repetition rate of 5 MHz with instrument response function 140 picoseconds. The lifetime of the PMT detector (TBX-07C) can be measured at around 140 picoseconds successfully.",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Emission monochromator: Seya-Namioka type, featuring motorized wavelength drive (200 nm to 800 nm), integral safety shutters interlocked to the lid of the sample compartment, and synchronized manually adjustable slits (1nm to 32 nm). DAS6 decay analysis software: Foundation Pack (including 1 to 5 exponentials) + DAS6-8 Anisotropy."]
//   },
//   {
//     id: 10,
//     name: 'Circular Dichroism Spectropolarimeter (CD)',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/10/cd_1-removebg-preview.png",
//     info: "Using the single or six-position Peltier temperature thermos tatted cell holders, one can design experiments to monitor any aspect of protein folding. The optional side entry port allows the simultaneous measurement of total fluorescence or fluorescence detected CD FCD.",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Measurement from 163-1100 nm with the highest S/N ever achieved","Traceable Calibration for IQ, OQ, and PQ for GLP/GMP regulated labs. Traceable standards for wavelength, absorbance, and CD signal21 CFR Part II compliant software for electronic signature","New auto-response measurement optimizes instrument response to scan speed and signal","Auto-scale mode for data acquisition","Remarkable stability eliminates the need for frequent calibration","Extremely low stray light (better than 0.0003%) ensures accurate, reproducible CD data into the Far UV","Compact, air-cooled 150W xenon arc source with the option for the massive luminous output, water-cooled 450-watt light source","Spectra Manager II and Spectra Manager CFR software for Windows XP Pro"]
//   },
//   {
//     id: 11,
//     name: 'Photo-Luminescence (PL)',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2024/03/IMG_3596-removebg-preview.png",
//     info: "Photoluminescence spectroscopy works in a non- contact mode. It is a non-destructive technique of examining the materials electronic structure.",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Determination of Band gap.","Identification of level of Impurity as well as defect.","Recombination phenomena.","Surface structure and excited state"]
//   },
//   {
//     id: 12,
//     name: 'UV-Visible Spectrometer',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/10/UV-Vis-removebg-preview.png",
//     info: "Accuracy: ± 2 nm Wavelength (s): 190 to 900 nm Light Source: Tungsten HalogenVersatile set of accessories including temperature control, liquid and solid sample holders, multicell holders, specular reflectance, diffuse reflectance, and fiber optics Large sample compartment with built-in accessory controller Working range past 3.5 absorbance units eliminates sample dilution WinUV software – modular design provides a wide range of applications via a simple interface Variable slit widths for optimum control over spectral resolution Phase-Locked wavelength drive prevents peak shifts and peak suppression at high scan speeds Sealed optics with quartz overcoating prevent exposure to corrosive environments and simplify cleaning",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Bacterial Culturing","Drug identification","Nucleic acid purity check","Quantitation to quality control in the beverage industry","In chemical research"]
//   },
//   {
//     id: 13,
//     name: 'UV VIS NIR',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/12/IMG_0054-removebg-preview.png",
//     info: "UV-VIS-NIR is a high-performance UV/Vis/NIR spectrophotometer capable of making measurements in the 190- 3300 nm range. The extreme versatility of this instrument permits the acquisition of spectra from almost any type of sample.",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["The LAMBDA 750 is designed to provide the maximum sampling flexibility for tough samples in chemistry, biochemistry, and materials science. The system is ideal for a busy research or teaching laboratory, as accessories and detector modules can quickly and easily be interchanged to provide the optimum configuration for each measurement."]
//   },
//   {
//     id: 14,
//     name: 'Spectrofluorometer',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/12/IMG_0058-removebg-preview.png",
//     info: "FluoroMax is a compact, single-module spectrofluorometer with thousands working daily worldwide, providing the ultimate in fluorescence sensitivity Now, TCSPC expertise from IBH, pioneers in the field, makes it the most sensitive method for recording fluorescence dynamics. The new FluoroMax-4 is a compact spectrofluorometer from SPEX®, yet it offers the ultimate sensitivity in fluorescence investigations as well as features not found in most table-top fluorescence detection systems. The FluoroMax-4 now has a 33% higher sensitivity and a 20% better signal-to-noise ratio for fluorescence lifetimes.",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Water Raman signal-to-noise ratio: 3000:1","Photon Counting for Ultimate Sensitivity","Fast Scanning capability – up to 80 nm/second","Powerful new FluorEssence™ software for Windows","Method Files to recall complete experiment parameters","Front Surface Detection Accessory","Fluorescence Microscope Accessory","Polarization and Anisotropy Accessory","Remote Measurement Capability using optical fibers","Time-correlated single-photon counting (TCSPC) accessory for lifetime determinations","Phosphor meter accessory for long-lived luminescence determinations"]
//   },
//   {
//     id: 15,
//     name: 'Scanning Electron Microscopy (FE-SEM)',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/09/IMG20220720123624__1_-removebg-preview.png",
//     info: "GEMINI Technology with high efficiency in-lens detector and no magnetic field at specimen level.Superb resolution and image quality at high and low operating voltages.Extremely wide operating voltage range from 0.02-30kV.Designed-in ease of use with minimal adjustments required when changing operating conditions.Short analytical working distance of 8.5 mm for simultaneous high resolution imaging and X-ray analysis.High probe current (up to 100 nA) with high stability (better than 0.2%/h) for precise analytical results.Variable Pressure (VP) mode up to 133Pa for superb imaging of non conductive samples.Multi-User friendly with Windows® based SmartSEM control software.",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Estimation of particle morphology, particle size and size distribution.","Elemental analysis using EDX mode.","Film evaluations","Characterization of very fine specimen features","Microstructure studies"]
//   },
//   {
//     id: 16,
//     name: 'Atomic Force Microscopy (AFM)',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/09/afm-removebg-preview.png",
//     info: "AFM is widely used for imaging friction between surfaces, the viscosity of liquids, the elasticity of materials, electrical forces, magnetic forces, conductivity, capacitance, and surface potential, among many other properties. AFM is one of the first 100% automated flexure-based scanning systems that offers its cutting-edge technology of ultra-fast, metrological, and high-resolution measurements for the most advanced materials research at the Nanoscale in all AFM and STM mode various Measuring modes, AFM is a powerful imaging and measurement technique that has become critical to nanoscale research and to industrial R&D in all of its possible forms. An excellent example is in the semiconductor industry, where AFM is used in quality control and imaging for silicon-integrated circuits.",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Semiconductor science and technology","Tribology (surface and friction interactions)","Surface chemistry","Polymer chemistry and physics","Cell Biology","Molecular biology","Energy storage (batter) and energy generation (photovoltaic) materials","Piezoelectric and ferroelectric materials","Semi-contact AFM in air/liquid","Non-contact AFM; Phase Imaging","Magnetic Force Microscopy (MFM)","Kelvin Probe (Potential Surface Microscopy)","Electric Force Microscopy (EFM)","Piezo Response Force Microscopy","Force curve measurements","Nanolithography","Conductive AFM","Scanning Tunneling Microscopy STM","Photocurrent Mapping","Volt-ampere characteristic measurements."]
//   },
//   {
//     id: 17,
//     name: 'Total Internal Reflection Fluorescence Microscopy(TIRFM)',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/09/IMG_20220927_151903-removebg-preview.png",
//     info: "Using Total internal reflection fluorescence microscopy (TIRFM) offers a unique environment to study the dynamics of individual molecules in an aqueous environment. It takes advantage of the evanescent field that is generated beyond a glass surface when laser light is totally reflected off the interface between two materials with different refractive indexes such as a fused silica slide and an aqueous buffer.",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Figure Showing the working principle of TIRFM Top panel shows the details of the optical components associated with the TIRFM set-up and the bottom panel highlights the total internal reflection of the laser light at the glass/water interface."]
//   },
//   {
//     id: 18,
//     name: 'Confocal Microscopy',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/09/IMG_20220920_140248__1_-removebg-preview.png",
//     info: "Confocal Microscopy has a state-of-the-art imaging system with a fully motorized inverted microscope-based multiphoton system capable of confocal imaging, fluorescence lifetime imaging microscopy (FLIM), fluorescence correlation spectroscopy (FCS), IR imaging, and live cell imaging. The microscope is fitted with Mai Tai DeepSee femtosecond tunable laser.",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Confocal laser scanning microscopy","Two-photon laser scanning microscopy","Fluorescence lifetime imaging microscopy","Fluorescence correlation spectroscopy","Live cell imaging"]
//   },
//   {
//     id: 19,
//     name: 'HR-MS',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/10/IMG_20220720_123915-removebg-preview.png",
//     info: "Bruker Daltonik, Benchtop easy-to-use, High-Performance Electrospray Ionization Quadrupole time-of-flight LC-MS spectrometer designed for exact mass and true isotopic measurements.The Liquid Chromatography-Mass Spectrometry (LC-MS) is a powerful analytical technique with very high sensitivity and specificity. LC-MS is combination of Liquid Chromatography (LC) and Mass Spectrometry (MS). With the Liquid Chromatography (LC) the separation of components can be done and then the sample eluents from LC are transferred into Mass Spectrometry (MS) where the detection, identification and determination of masses of components can be done in presence of other components LC-MS is a hyphenated technique used in combination with separation power of HPLC with detection power of Mass spectrometry. It is widely used in pharmaceutical, chemical, food, agrochemical industries, environmental and forensic applications. LC-MS is used for qualitative and quantitative determination of drug substances and biological samples. Also it is commonly used in drug research and quality control",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Liquid chromatography-mass spectrometry (LC–MS) is a powerful analytical technique used for separation, identification, and quantification of both unknown and known compounds as well as to elucidate the structure and chemical properties of different molecules","In Pharmacokinetics: LC-MS is used in the study of absorption, metabolism, and excretion of drugs. Bio analytical methods are used for quantitative and structural elucidation of drugs and its metabolites in the biological samples (plasma, urine, saliva, serum etc.","In Bioavailability and Bioequivalence study: Comparative bioequivalence studies in which quantitative determination of drugs or metabolites is measured in biological matrix, pharmacodynamics, clinical trials and In-vitro dissolution tests.","In determination of molecular weights: LC-MS is used for determination of molecular weights of known and unknown compounds. It provides the information about molecular weight, structure, identification, quantity of sample components. LC-MS is used for determination of molecular masses of proteins, nucleic acids, polymers and peptides.","In determination of Assay of drug and intermediates: LC-MS is used in pharmaceutical industry for determination of assay of drug substances, drug products, intermediates and their related compounds.","In Agrochemical and pesticides industry: It is used in determination of different components present in the fertilizers and pesticides.","Environmental Applications: LC-MS is used for detection of phenyl urea herbicides, detection of low level of carbaryl in food."]
//   },
//   {
//     id: 20,
//     name: 'High Performance Liquid Chromatography (HPLC) (Reversed Phase)',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/10/IMG_20220720_123859-removebg-preview.png",
//     info: "Standard LC systems provide the right solution for demanding microbore, analytical, and semipreparative LC applications. System components are perfectly matched to meet requirements such as low extra column and gradient delay volume for high separation efficiency and low gradient response times, as well as superior mixing performance. Analytical systems are UHPLC compatible with pressures up to 62 MPa (9000 psi). For more product information on UltiMate 3000 UHPLC systems and solutions,",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["The HPLC has developed into a universally applicable method so that it finds its use in almost all areas of chemistry, biochemistry, and pharmacy.","Analysis of drugs","Analysis of synthetic polymers","Analysis of pollutants in environmental analytics","Determination of drugs in biological matrices","Isolation of valuable products","Product purity and quality control of industrial products and fine chemicals","Separation and purification of biopolymers such as enzymes or nucleic acids","Water purification","Pre-concentration of trace components","Ligand-exchange chromatography","Ion-exchange chromatography of proteins","High-pH anion-exchange chromatography of carbohydrates and oligosaccharides"]
//   },
//   {
//     id: 21,
//     name: 'Gas Chromatography – Mass Spectrometer (GC-MS)',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/10/IMG_20220920_140551__1_-removebg-preview.png",
//     info: "It is a versatile analytical tool for the separation and identification of non-polar / mid-polar compounds in the reaction mixture. Presently SIC is equipped with a GC-MS QP 2010 Ultra mass spectrometer from Shimadzu Analytical India Pvt. Ltd. The machine can be configured into 3 types of configurations viz. GC-MS, GC-TCD, GC-FID. GC-MS uses Electron Ionization (EI), Chemical Ionization (CI) since it has the capability to perform positive and negative ionization for molecular weight information of more complex samples. GC-MS uses helium as inert carrier gas. It is a very sensitive instrument and can detect up to PPM-level masses. The mass range is 10-1000 Da, which allows analysis over a wide range of low and high-molecular-weight compounds. NIST Mass spectra library is available for the separation/ identification of organic compounds and molecules. GC-TCD can be used for Gases samples analysis such as Hydrogen, Nitrogen, Carbon Monoxide, Carbon Dioxide, and Methane effectively. The GC-FID is well suited for the analysis of hydrocarbons such as methane, ethane, acetylene, etc., but also for organic substances containing hydrocarbons and for volatile organic compounds.",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Identification and quantitation of volatile and semi-volatile organic compounds in complex mixtures","Determination of molecular weights and (sometimes) elemental compositions of unknown organic","compounds in complex mixtures","Structural determination of unknown organic compounds in complex mixtures by matching","Their spectra with reference spectra and by a priori spectral interpretation","Analysis Time","In addition to sample preparation time, the instrumental analysis time usually is fixed by the duration of the gas chromatographic run, typically between 20 and 100 min"]
//   },
//   {
//     id: 22,
//     name: 'Spectroelectro Chemical Cell (SEC)',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/09/sec_3.jpg",
//     info: "In situ spectroscopy – Transmission mode To monitor the online spectral changes at the surface such as polymerization Spectro electrochemical cell 10mm path with Ag/AgCl reference, Pt counter and WE ITO and Au grid electrode.In situ spectroscopy – Transmission mode includes 2 QP 200-2 UV VIS optical fiber, 1cm cuvette sample holder, 1cm …. Cell with Teflon cap 50nos of ITO Platte’s 7mm x 1.5mm … x 50mm height.",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Loading…"]
//   },
//   {
//     id: 23,
//     name: 'Thermogravimetric Analyzer (TGA)',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/10/IMG_20220920_140650-removebg-preview.png",
//     info: "Thermogravimetry (TGA) is a technique that measures the change in weight of a sample as it is heated, cooled, or held at a constant temperature. Its main use is to characterize materials with regard to their composition. Application areas include plastics, elastomers and thermosets, mineral compounds, and ceramics as well as a wide range of analyses in the chemical and pharmaceutical industries.",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["In TGA the weight loss or gain is measured as a function of temperature or time.","The TGA curve appears as steps involving horizontal and curved portions.","The instrument used in TGA is a thermobalance.","TGA gives information only for substances that show a change in mass on heating or cooling.","The upper temperature used for TGA is normally 1000 °C.","Quantitative analysis is done from the thermal curve by measuring the loss in mass.","The data obtained in TGA is useful in determining the purity and composition of materials, drying and ignition temperatures of materials, and knowing the stability temperatures of compounds.","TGA can be used to evaluate the thermal stability of a material. In the desired temperature range, if a species is thermally stable, there will be no observed mass change. Negligible mass loss corresponds to little or no slope in the TGA trace. TGA also gives the upper use temperature of a material. Beyond this temperature, the material will begin to degrade.","TGA is used in the analysis of polymers. Polymers usually melt before they decompose, thus TGA is mainly used to investigate the thermal stability of polymers. Most polymers melt or degrade before 200 °C. However, there is a class of thermally stable polymers that are able to withstand temperatures of at least 300 °C in air and 500 °C in inert gases without structural changes or strength loss, which can be analyzed by TGA.","The simplest materials characterization is the residue remaining after a reaction. For example, a combustion reaction could be tested by loading a sample into a thermogravimetric analyzer under normal conditions. The thermogravimetric analyzer would cause ion combustion in the sample by heating it beyond its ignition temperature. The resultant TGA curve plotted with the y axis as a percentage of initial mass would show the residue at the final point of the curve.","Oxidative mass losses are the most common observable losses in TGA.","Studying the resistance to oxidation in copper alloys is very important. For example, NASA (National Aeronautics and Space Administration) is conducting research on advanced copper alloys for their possible use in combustion engines. However, oxidative degradation can occur in these alloys as copper oxides form in atmospheres that are rich in oxygen. Resistance to oxidation is very important because NASA wants to be able to reuse shuttle materials. TGA can be used to study the static oxidation of materials such as these for practical use."]
//   },
//   {
//     id: 24,
//     name: 'Differential Scanning Calorimetry (DSC)',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/09/IMG20220720124226-removebg-preview.png",
//     info: "Differential scanning calorimetry is an important technique in determining the phase transitions such as melting, crystallization, crystal to crystal transitions, crystal to liquid crystal, and vice versa, glass transactions in polymers, etc. It gives valuable information on heat absorbed or released during phase change.",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Differential scanning calorimetry can be used to measure a number of characteristic properties of a sample. Using this technique it is possible to observe fusion and crystallization events as well as glass transition temperatures.","DSC can also be used to study oxidation, as well as other chemical reactions","Glass transitions may occur as the temperature of an amorphous solid is increased. These transitions appear as a step in the baseline of the recorded DSC signal. This is due to the sample undergoing a change in heat capacity; no formal phase change occurs.","As the temperature increases, an amorphous solid will become less viscous. At some point, the molecules may obtain enough freedom of motion to spontaneously arrange themselves into a crystalline form. This is known as the crystallization temperature (Tc). This transition from amorphous solid to crystalline solid is an exothermic process and results in a peak in the DSC signal. As the temperature increases, the sample eventually reaches its melting temperature (Tm). The melting process results in an endothermic peak in the DSC curve. The ability to determine transition temperatures and enthalpies makes DSC a valuable tool in producing phase diagrams for various chemical systems."]
//   },
//   {
//     id: 25,
//     name: 'BET Surface Area Analyzer',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/10/IMG_20220927_1539441-removebg-preview.png",
//     info: "Phys sorption-Surface area of 0.01 m 2 /g and upwards can be accurately determined using nitrogen at liquid nitrogen temperature. Chemisorption-Chemisorption is used primarily to evaluate quantitatively the number of surface active sites which are likely to promote (catalyze) chemical reactions. Both static adsorption isotherms and dynamic pulse titrations yield monolayer uptake, metal area, nanocluster (crystallite) size and active metal area of heterogeneous catalysts. Isothermal results can be used to map surface energetic heterogeneity via heat of adsorption calculations. ",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["BET surface area (single and/or multipoint)","Langmuir surface area, adsorption and/or desorption isotherms, pore size and surface area distributions, micropore volume and surface area","Mapping surface energetic heterogeneity via heat of adsorption calculations."]
//   },
//   {
//     id: 26,
//     name: 'Microwave Reactor',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2023/07/1690360604548-removebg-preview-2.png",
//     info: "Monowave Reactor 200-Needs 5.5bar to 6 bar of compressed gas for correct pressure measurement and tight sealing up to 20 bar.  The Anton Paar Monowave product line is a series of high-performance monomode microwave reactors designed for small- to medium-scale microwave synthesis.  Attain temperatures up to 300 °C and pressures up to 30 bar with advanced all-the-time safety features for high-speed, high-pressure, high-temperature reactions. Improve productivity and product purity across all applications in research and development laboratories with precise heating profiles.  Reduce consumable costs and your environmental footprint by using the reusable vials, caps, and septa.  Precaution-Before using Monowave 200, read the monowave instruction manuals carefully and observe all mentioned safety instructions. Note-Monowave 200 is not acid resistance! The use of corrosive chemicals will reduce the lifetime of the instrument Chemi Batch",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Academic Research.","Agrochemicals.","Catalysts.","Emulsions.","Inorganic Chemicals.","Liquid Crystals.","Lubricant testing.","Organic Chemicals."]
//   },
//   {
//     id: 27,
//     name: 'CHNS Elemental Analyzer',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/10/IMG_20220927_1528361-removebg-preview.png",
//     info: "The main instrument for Thermo Fisher scientific FLASH 2000 (formerly the Flash EA1112) is the CHNS-O Elemental Analyzer. It was designed to operate on the “Dumas method” principle, which calls for “flash combustion” to completely and instantly oxidizing the sample. The combustion products are separated by a chromatography before being detected by a thermal conductivity detector (T.C.D. ), which produces an output signal corresponding to the concentration of each component in the mixture. The purpose of the element analyzer is to estimate the percentages of carbon, hydrogen, nitrogen, and sulfur present in organic and inorganic samples produced both internally at the Institute and externally.The FLASH 2000 is based on a dynamic flash combustion and the ability to switch from CHNS or CHNS-Oxygen without powering down to reconfigure, excellent accuracy and reproducibility. We analysis samples within the Institute and for other Institutes also from external commercial companies",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["CHNS elemental analysers have been used in analytical laboratories for over thirty years. The method is used extensively across a wide range of applications, including pharmaceuticals, chemicals, oil-related products, catalysts and food. In the oil industry, an important application is the regular monitoring of coke build-up on refinery catalysts to ensure that regeneration procedures (involving controlled burning of the carbon) are executed at optimal intervals. Since many of these catalyst systems involve large quantities of noble metals such as platinum, palladium and rhenium, mismanagement of this testing would entail serious financial losses. In food analysis, the determination of nitrogen (as a surrogate for protein) is very important for pricing grain and evaluating meat products, and is increasingly undertaken by combustion analysis.","Organic compounds","Pharmaceuticals","Organometallics","Petrochemicals","Petrochemicals","Polymers"]
//   },
//   {
//     id: 28,
//     name: 'Lyophilizer',
//     image:"https://sic.iiti.ac.in/wp-content/uploads/2022/10/IMG_20220920_140308__1_-removebg-preview.png",
//     info: "Vacuum Break Valve prevents oil backstreaming by bleeding air into the system when power to the freeze dryer or pump is shut off.The patented Moisture Sensor protects the vacuum pump by preventing refrigeration or vacuum start-up when moisture is detected in the collector chamber area.Durable steel cabinet Benchtop models fit countertops and lab carts.Upright, stainless steel collector chamber Speeds and simplifies defrost. Available with PTFE-coated collector coil and chamber for additional corrosion resistance.Quick disconnect drain hose fitting For convenient defrost Vacuum control valve Maintains set point vacuum level to speed the freeze drying process.Hot Gas Defrost Automatically shuts off when defrosting is complete.",
//     status: 'working',
//     charge:105,
//     commertial_charge:50,
//     academic_charge:50,
//     application:["Pharmaceuticals and biotechnology Pharmaceutical companies often use freeze-drying to increase the shelf life of the products, such as live virus vaccines, biologics, and other injectables. By removing the water from the material and sealing it in a glass vial, the material can be easily stored, shipped, and later reconstituted to its original form for injection.","Freeze drying of food The primary purpose of freeze drying within the food industry is to extend the shelf-life of the food while maintaining its quality.","ISRO and Military rations Because of their light weight per volume of reconstituted food, freeze-dried products are popular and convenient for hikers, such as military rations or astronaut meals.","Coffee contains flavor and aroma qualities created due to the Maillard reaction during roasting and can be preserved with freeze-drying.","Fruits With conventional dehydration, berries can degrade in quality as their structure is very delicate and contains high moisture levels. Strawberries were found to have the highest quality when freeze-dried, retaining color, flavor, and ability to be rehydrated.","Insects Freeze-drying is used extensively to preserve insects for the purposes of consumption. Whole freeze-dried insects are sold as exotic pet food, bird feed, fish bait, and increasingly for human consumption.","Technological industry In chemical synthesis, products are often freeze-dried to make them more stable or easier to dissolve in water for subsequent use.","Taxidermy Freeze-drying is among the methods used to preserve animals in the field of taxidermy. When animals are preserved in this manner, they are called “freeze-dried taxidermy” or “freeze-dried mounts.”"]
//   },
  
// ];

export const dynamic = 'force-dynamic'
export async function GET(req) {
    try{
    await mongoose.connect(connection.connection);
    const inst=await instrument.find();
    // console.log(inst,"op")


    return NextResponse.json(inst);} //
    catch{
        return NextResponse.json({"status":"fail"});
    }
}