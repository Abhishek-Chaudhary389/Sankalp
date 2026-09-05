import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import sankalpLogo from '../assets/sankalp.jpg';

const Donate = () => {
    // Preset donation amounts
    const presetAmounts = [500, 1000, 2100, 5100, 11000, 21000];

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        aadhaar: '',
        address: '',
        transactionId: '',
        amount: '1000',
        customAmount: '',
        pan: '',
        purpose: 'सामान्य समाजकार्य (General Support)',
        notes: ''
    });

    // Receipt File State
    const [receiptFile, setReceiptFile] = useState(null);
    const [receiptPreview, setReceiptPreview] = useState(null);
    const [fileError, setFileError] = useState('');
    const fileInputRef = useRef(null);

    // UI States
    const [copySuccess, setCopySuccess] = useState({ upi: false, acc: false, ifsc: false });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);

    // Bank & UPI Details
    const bankDetails = {
        accountName: 'SANKALP JANSEVA FOUNDATION',
        accountNumber: '50200084729103',
        ifscCode: 'HDFC0001234',
        bankName: 'HDFC Bank',
        branch: 'Maharashtra Branch',
        accountType: 'Current Account (Section 8 NGO)',
        upiId: 'sankalpfoundation@upi',
        mobileNumber: '+91 98765 43210'
    };

    // Handle Copy to Clipboard
    const handleCopy = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopySuccess(prev => ({ ...prev, [field]: true }));
        setTimeout(() => {
            setCopySuccess(prev => ({ ...prev, [field]: false }));
        }, 2000);
    };

    // Handle Aadhaar formatting (12 digits with spaces: 1234 5678 9012)
    const handleAadhaarChange = (e) => {
        const rawVal = e.target.value.replace(/\D/g, '').slice(0, 12);
        const formatted = rawVal.replace(/(\d{4})(?=\d)/g, '$1 ');
        setFormData(prev => ({ ...prev, aadhaar: formatted }));
    };

    // Handle Mobile Number (10 digits)
    const handleMobileChange = (e) => {
        const rawVal = e.target.value.replace(/\D/g, '').slice(0, 10);
        setFormData(prev => ({ ...prev, mobile: rawVal }));
    };

    // Handle Amount selection
    const handleAmountSelect = (val) => {
        setFormData(prev => ({
            ...prev,
            amount: String(val),
            customAmount: ''
        }));
    };

    const handleCustomAmountChange = (e) => {
        const val = e.target.value.replace(/\D/g, '');
        setFormData(prev => ({
            ...prev,
            amount: val,
            customAmount: val
        }));
    };

    // Handle File Upload & Preview
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        processFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        processFile(file);
    };

    const processFile = (file) => {
        setFileError('');
        if (!file) return;

        // Check size (max 8MB)
        if (file.size > 8 * 1024 * 1024) {
            setFileError('फाईलचा आकार 8MB पेक्षा कमी असावा.');
            return;
        }

        // Check type
        if (!['image/jpeg', 'image/png', 'image/webp', 'image/jpg', 'application/pdf'].includes(file.type)) {
            setFileError('फक्त JPG, PNG, WEBP किंवा PDF फाईल अपलोड करा.');
            return;
        }

        setReceiptFile(file);

        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setReceiptPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setReceiptPreview('pdf');
        }
    };

    const removeFile = () => {
        setReceiptFile(null);
        setReceiptPreview(null);
        setFileError('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // Form Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            alert('कृपया आपले पूर्ण नाव भरा.');
            return;
        }
        if (formData.mobile.length !== 10) {
            alert('कृपया योग्य १० अंकी मोबाईल नंबर टाका.');
            return;
        }
        const cleanAadhaar = formData.aadhaar.replace(/\s/g, '');
        if (cleanAadhaar.length !== 12) {
            alert('कृपया १२ अंकी वैध आधार कार्ड नंबर टाका.');
            return;
        }
        if (!formData.address.trim()) {
            alert('कृपया आपला संपूर्ण पत्ता भरा.');
            return;
        }
        if (!formData.transactionId.trim()) {
            alert('कृपया बँक ट्रान्झॅक्शन / UTR नंबर टाका.');
            return;
        }
        if (!formData.amount || Number(formData.amount) <= 0) {
            alert('कृपया देणगी रक्कम निवडा किंवा प्रविष्ट करा.');
            return;
        }
        if (!receiptFile) {
            alert('कृपया पेमेंट पावतीचा स्क्रीनशॉट किंवा PDF अपलोड करा.');
            return;
        }

        setIsSubmitting(true);

        // Simulate submission / processing
        setTimeout(() => {
            const receiptNo = `SJF-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
            const submission = {
                ...formData,
                receiptNo,
                date: new Date().toLocaleDateString('mr-IN', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                }),
                time: new Date().toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                }),
                receiptFileName: receiptFile.name
            };

            setSubmittedData(submission);
            setIsSubmitting(false);
            window.scrollTo({ top: 100, behavior: 'smooth' });
        }, 1200);
    };

    // Construct WhatsApp confirmation text
    const getWhatsAppShareUrl = () => {
        if (!submittedData) return '#';
        const text = `*संकल्प जनसेवा फाउंडेशन - देणगी नोंदणी*\n\n` +
            `👤 *नाव:* ${submittedData.name}\n` +
            `📞 *मोबाईल:* ${submittedData.mobile}\n` +
            `💳 *आधार क्रमांक:* ${submittedData.aadhaar}\n` +
            `📍 *पत्ता:* ${submittedData.address}\n` +
            `💰 *देणगी रक्कम:* ₹${Number(submittedData.amount).toLocaleString('en-IN')}\n` +
            `🧾 *UTR / Transaction ID:* ${submittedData.transactionId}\n` +
            `🔖 *पावती संदर्भ क्रमांक:* ${submittedData.receiptNo}\n` +
            `📅 *दिनांक:* ${submittedData.date} (${submittedData.time})\n\n` +
            `मी माझ्या देणगीचे तपशील आणि पावती यशस्वीरीत्या सबमिट केली आहे. कृपया अधिकृत 80G पावती पाठवावी.`;

        return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
    };

    const handlePrintReceipt = () => {
        window.print();
    };

    const handleResetForm = () => {
        setSubmittedData(null);
        setFormData({
            name: '',
            mobile: '',
            aadhaar: '',
            address: '',
            transactionId: '',
            amount: '1000',
            customAmount: '',
            pan: '',
            purpose: 'सामान्य समाजकार्य (General Support)',
            notes: ''
        });
        removeFile();
    };

    return (
        <div className="w-full min-h-screen bg-slate-50/60 py-10 lg:py-16 text-slate-800">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 shadow-2xs mb-3.5">
                        <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
                        <span className="text-xs font-black text-[#b45309] uppercase tracking-wider font-['Hind',sans-serif]">
                            देणगी व सहकार्य • Donate & Support
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight font-['Hind',sans-serif] leading-tight">
                        समाजसेवेसाठी आपले योगदान द्या <br className="hidden sm:inline" />
                        <span className="text-[#f59e0b]">(Donate For A Noble Cause)</span>
                    </h1>
                    <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                        प्रत्येक देणगीमुळे गरजू विद्यार्थ्यांना शैक्षणिक मदत, वंचित रुग्णांना आरोग्यसेवा, आणि पर्यावरणाला नवी पालवी मिळते.
                    </p>

                    {/* Quick Steps Progress Bar */}
                    <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto">
                        <div className="bg-white border border-amber-200/80 rounded-2xl p-2.5 sm:p-3 text-center shadow-2xs">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white font-black text-xs mb-1">1</span>
                            <p className="text-[11px] sm:text-xs font-bold text-slate-800 font-['Hind',sans-serif] leading-tight">QR स्कॅन / ट्रान्सफर</p>
                        </div>
                        <div className="bg-white border border-amber-200/80 rounded-2xl p-2.5 sm:p-3 text-center shadow-2xs">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white font-black text-xs mb-1">2</span>
                            <p className="text-[11px] sm:text-xs font-bold text-slate-800 font-['Hind',sans-serif] leading-tight">फॉर्म भरा व पावती जोडा</p>
                        </div>
                        <div className="bg-white border border-amber-200/80 rounded-2xl p-2.5 sm:p-3 text-center shadow-2xs">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-600 text-white font-black text-xs mb-1">3</span>
                            <p className="text-[11px] sm:text-xs font-bold text-slate-800 font-['Hind',sans-serif] leading-tight">अधिकृत पावती मिळवा</p>
                        </div>
                    </div>
                </div>

                {/* ========================================================= */}
                {/* SUCCESS CONFIRMATION MODAL / RECEIPT STATE */}
                {/* ========================================================= */}
                {submittedData ? (
                    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-emerald-200 shadow-xl animate-in fade-in zoom-in-95 duration-300">
                        <div className="text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-inner">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>

                            <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 uppercase tracking-wider">
                                देणगी तपशील यशस्वीरीत्या नोंदवला गेला
                            </span>

                            <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a] font-['Hind',sans-serif] mt-3">
                                मनःपूर्वक धन्यवाद, {submittedData.name}!
                            </h2>
                            <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
                                आपल्या मोलाच्या देणगीमुळे सामाजिक कार्यास मोठी ऊर्जा मिळाली आहे.
                            </p>
                        </div>

                        {/* Official Voucher Card */}
                        <div className="mt-8 bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80 space-y-3.5 text-xs sm:text-sm">
                            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                                <span className="text-slate-500 font-medium">पावती संदर्भ क्रमांक (Receipt No):</span>
                                <span className="font-mono font-black text-[#0f172a] text-sm sm:text-base">{submittedData.receiptNo}</span>
                            </div>

                            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                                <span className="text-slate-500 font-medium">देणगी रक्कम (Amount):</span>
                                <span className="font-black text-emerald-600 text-lg sm:text-xl">₹{Number(submittedData.amount).toLocaleString('en-IN')}</span>
                            </div>

                            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                                <span className="text-slate-500 font-medium">ट्रान्झॅक्शन / UTR ID:</span>
                                <span className="font-mono font-bold text-slate-800">{submittedData.transactionId}</span>
                            </div>

                            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                                <span className="text-slate-500 font-medium">मोबाईल नंबर:</span>
                                <span className="font-semibold text-slate-800">+91 {submittedData.mobile}</span>
                            </div>

                            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                                <span className="text-slate-500 font-medium">आधार कार्ड क्रमांक:</span>
                                <span className="font-mono font-semibold text-slate-800">{submittedData.aadhaar}</span>
                            </div>

                            <div className="flex items-start justify-between border-b border-slate-200 pb-3">
                                <span className="text-slate-500 font-medium">पत्ता:</span>
                                <span className="font-semibold text-slate-800 text-right max-w-[60%]">{submittedData.address}</span>
                            </div>

                            <div className="flex items-center justify-between text-slate-500 text-[11px] pt-1">
                                <span>दिनांक व वेळ:</span>
                                <span>{submittedData.date} | {submittedData.time}</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 space-y-3">
                            <a
                                href={getWhatsAppShareUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm py-3.5 px-6 rounded-2xl shadow-md transition active:scale-98"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span>व्हाट्सअ‍ॅपवर पावती पाठवा (Send on WhatsApp)</span>
                            </a>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <button
                                    onClick={handlePrintReceipt}
                                    className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-2xl transition shadow-xs"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                    </svg>
                                    <span>पावती प्रिंट / सेव्ह करा</span>
                                </button>

                                <button
                                    onClick={handleResetForm}
                                    className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm py-3 px-4 rounded-2xl transition"
                                >
                                    <span>दुसरी देणगी नोंदवा</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (

                    /* ========================================================= */
                    /* MAIN TWO-COLUMN LAYOUT: QR & BANK (TOP/LEFT) + FORM (RIGHT/BOTTOM) */
                    /* ========================================================= */
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

                        {/* LEFT COLUMN: QR Code & Bank Transfer Information */}
                        <div className="lg:col-span-5 space-y-6">

                            {/* 1. Admin UPI QR Code Card */}
                            <div className="bg-gradient-to-br from-[#0f172a] via-slate-900 to-[#0b1329] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
                                {/* Decorative background glow */}
                                <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

                                <div className="text-center relative z-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black uppercase tracking-wider mb-3 font-['Hind',sans-serif]">
                                        अधिकृत UPI पेमेंट क्यूआर कोड
                                    </div>

                                    <h2 className="text-xl sm:text-2xl font-black font-['Hind',sans-serif] tracking-tight">
                                        स्कॅन करा आणि देणगी द्या
                                    </h2>
                                    <p className="text-xs text-slate-300 mt-1 mb-5">
                                        Scan using any UPI App (GPay, PhonePe, Paytm, BHIM)
                                    </p>

                                    {/* QR Code Container Box */}
                                    <div className="bg-white p-5 rounded-2xl inline-block shadow-2xl border-4 border-amber-400/80 mx-auto transition-transform duration-300 hover:scale-[1.02]">
                                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto flex items-center justify-center bg-white rounded-xl">
                                            {/* SVG UPI QR Code with Real Embedded Design */}
                                            <svg
                                                className="w-full h-full"
                                                viewBox="0 0 200 200"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                {/* Background */}
                                                <rect width="200" height="200" fill="white" />

                                                {/* Top-Left Position Square */}
                                                <rect x="15" y="15" width="45" height="45" rx="6" fill="#0f172a" />
                                                <rect x="23" y="23" width="29" height="29" rx="3" fill="white" />
                                                <rect x="29" y="29" width="17" height="17" rx="2" fill="#f59e0b" />

                                                {/* Top-Right Position Square */}
                                                <rect x="140" y="15" width="45" height="45" rx="6" fill="#0f172a" />
                                                <rect x="148" y="23" width="29" height="29" rx="3" fill="white" />
                                                <rect x="154" y="29" width="17" height="17" rx="2" fill="#f59e0b" />

                                                {/* Bottom-Left Position Square */}
                                                <rect x="15" y="140" width="45" height="45" rx="6" fill="#0f172a" />
                                                <rect x="23" y="148" width="29" height="29" rx="3" fill="white" />
                                                <rect x="29" y="154" width="17" height="17" rx="2" fill="#f59e0b" />

                                                {/* QR Code Pattern Modules Grid */}
                                                {/* Row 1-4 random dense modules */}
                                                <rect x="70" y="20" width="8" height="8" fill="#0f172a" />
                                                <rect x="85" y="20" width="14" height="8" fill="#0f172a" />
                                                <rect x="110" y="20" width="8" height="8" fill="#0f172a" />
                                                <rect x="70" y="35" width="12" height="8" fill="#0f172a" />
                                                <rect x="95" y="35" width="8" height="8" fill="#0f172a" />
                                                <rect x="115" y="35" width="12" height="8" fill="#0f172a" />
                                                <rect x="75" y="50" width="18" height="8" fill="#0f172a" />
                                                <rect x="105" y="50" width="18" height="8" fill="#0f172a" />

                                                {/* Middle Rows */}
                                                <rect x="20" y="70" width="16" height="8" fill="#0f172a" />
                                                <rect x="45" y="70" width="8" height="8" fill="#0f172a" />
                                                <rect x="60" y="70" width="12" height="8" fill="#0f172a" />
                                                <rect x="80" y="70" width="8" height="8" fill="#0f172a" />
                                                <rect x="95" y="70" width="14" height="8" fill="#0f172a" />
                                                <rect x="120" y="70" width="8" height="8" fill="#0f172a" />
                                                <rect x="140" y="70" width="18" height="8" fill="#0f172a" />
                                                <rect x="168" y="70" width="12" height="8" fill="#0f172a" />

                                                <rect x="20" y="85" width="8" height="8" fill="#0f172a" />
                                                <rect x="35" y="85" width="18" height="8" fill="#0f172a" />
                                                <rect x="60" y="85" width="8" height="8" fill="#0f172a" />
                                                <rect x="135" y="85" width="12" height="8" fill="#0f172a" />
                                                <rect x="155" y="85" width="8" height="8" fill="#0f172a" />
                                                <rect x="170" y="85" width="10" height="8" fill="#0f172a" />

                                                <rect x="20" y="100" width="14" height="8" fill="#0f172a" />
                                                <rect x="42" y="100" width="12" height="8" fill="#0f172a" />
                                                <rect x="60" y="100" width="8" height="8" fill="#0f172a" />
                                                <rect x="135" y="100" width="8" height="8" fill="#0f172a" />
                                                <rect x="150" y="100" width="18" height="8" fill="#0f172a" />
                                                <rect x="175" y="100" width="8" height="8" fill="#0f172a" />

                                                <rect x="20" y="115" width="10" height="8" fill="#0f172a" />
                                                <rect x="38" y="115" width="16" height="8" fill="#0f172a" />
                                                <rect x="60" y="115" width="14" height="8" fill="#0f172a" />
                                                <rect x="80" y="115" width="8" height="8" fill="#0f172a" />
                                                <rect x="95" y="115" width="14" height="8" fill="#0f172a" />
                                                <rect x="120" y="115" width="8" height="8" fill="#0f172a" />
                                                <rect x="140" y="115" width="16" height="8" fill="#0f172a" />
                                                <rect x="165" y="115" width="14" height="8" fill="#0f172a" />

                                                {/* Bottom Rows */}
                                                <rect x="70" y="135" width="12" height="8" fill="#0f172a" />
                                                <rect x="90" y="135" width="18" height="8" fill="#0f172a" />
                                                <rect x="115" y="135" width="8" height="8" fill="#0f172a" />
                                                <rect x="135" y="135" width="14" height="8" fill="#0f172a" />
                                                <rect x="160" y="135" width="20" height="8" fill="#0f172a" />

                                                <rect x="70" y="150" width="18" height="8" fill="#0f172a" />
                                                <rect x="95" y="150" width="8" height="8" fill="#0f172a" />
                                                <rect x="110" y="150" width="18" height="8" fill="#0f172a" />
                                                <rect x="135" y="150" width="8" height="8" fill="#0f172a" />
                                                <rect x="150" y="150" width="14" height="8" fill="#0f172a" />
                                                <rect x="170" y="150" width="12" height="8" fill="#0f172a" />

                                                <rect x="70" y="165" width="8" height="8" fill="#0f172a" />
                                                <rect x="85" y="165" width="14" height="8" fill="#0f172a" />
                                                <rect x="105" y="165" width="8" height="8" fill="#0f172a" />
                                                <rect x="120" y="165" width="12" height="8" fill="#0f172a" />
                                                <rect x="140" y="165" width="18" height="8" fill="#0f172a" />
                                                <rect x="165" y="165" width="14" height="8" fill="#0f172a" />

                                                {/* Center Brand Badge on QR Code */}
                                                <rect x="76" y="76" width="48" height="48" rx="10" fill="white" stroke="#f59e0b" strokeWidth="2.5" />
                                            </svg>

                                            {/* Center Logo in QR Code */}
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-0.5 shadow-md flex items-center justify-center">
                                                    <img
                                                        src={sankalpLogo}
                                                        alt="Sankalp Logo"
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-[11px] font-black text-slate-800 uppercase tracking-wider mt-2.5">
                                            Sankalp Janseva Foundation
                                        </p>
                                    </div>

                                    {/* UPI ID with Copy Button */}
                                    <div className="mt-5 bg-white/10 rounded-2xl p-3 border border-white/10 flex items-center justify-between gap-2 max-w-sm mx-auto">
                                        <div className="text-left overflow-hidden">
                                            <p className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">Official UPI ID</p>
                                            <p className="font-mono text-xs sm:text-sm font-bold text-white truncate">{bankDetails.upiId}</p>
                                        </div>
                                        <button
                                            onClick={() => handleCopy(bankDetails.upiId, 'upi')}
                                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 ${copySuccess.upi
                                                ? 'bg-emerald-500 text-white'
                                                : 'bg-amber-500 hover:bg-amber-600 text-white active:scale-95'
                                                }`}
                                        >
                                            {copySuccess.upi ? 'Copied! ✓' : 'Copy UPI'}
                                        </button>
                                    </div>

                                    {/* Supported UPI Badges */}
                                    <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-center gap-2 flex-wrap">
                                        <span className="text-[10px] font-semibold text-slate-400">Supported Apps:</span>
                                        <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-bold text-slate-200">Google Pay</span>
                                        <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-bold text-slate-200">PhonePe</span>
                                        <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-bold text-slate-200">Paytm</span>
                                        <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-bold text-slate-200">BHIM UPI</span>
                                    </div>

                                </div>
                            </div>

                            {/* 2. Official Bank Account Transfer Card */}
                            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
                                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#f59e0b] flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-black text-slate-900 font-['Hind',sans-serif]">
                                            बँक खाते तपशील (Bank Account Details)
                                        </h3>
                                        <p className="text-[11px] text-slate-500">NEFT / RTGS / IMPS द्वारे थेट देणगीसाठी</p>
                                    </div>
                                </div>

                                <div className="space-y-2.5 text-xs sm:text-sm">
                                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] text-slate-500 font-semibold">Account Name</p>
                                            <p className="font-bold text-slate-900">{bankDetails.accountName}</p>
                                        </div>
                                    </div>

                                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] text-slate-500 font-semibold">Account Number</p>
                                            <p className="font-mono font-bold text-slate-900">{bankDetails.accountNumber}</p>
                                        </div>
                                        <button
                                            onClick={() => handleCopy(bankDetails.accountNumber, 'acc')}
                                            className="px-2.5 py-1 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition"
                                        >
                                            {copySuccess.acc ? 'Copied ✓' : 'Copy'}
                                        </button>
                                    </div>

                                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] text-slate-500 font-semibold">IFSC Code</p>
                                            <p className="font-mono font-bold text-slate-900">{bankDetails.ifscCode}</p>
                                        </div>
                                        <button
                                            onClick={() => handleCopy(bankDetails.ifscCode, 'ifsc')}
                                            className="px-2.5 py-1 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition"
                                        >
                                            {copySuccess.ifsc ? 'Copied ✓' : 'Copy'}
                                        </button>
                                    </div>

                                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                                        <p className="text-[10px] text-slate-500 font-semibold">Bank & Branch</p>
                                        <p className="font-semibold text-slate-800">{bankDetails.bankName}, {bankDetails.branch}</p>
                                    </div>
                                </div>

                                {/* Trust Badge */}
                                <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/70 flex items-center gap-2.5 text-xs text-amber-900">
                                    <svg className="w-5 h-5 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-[11px] leading-snug">
                                        <strong>100% पारदर्शक संस्था:</strong> कंपनी कायदा, २०१३ च्या कलम ८ अंतर्गत अधिकृत नोंदणीकृत स्वयंसेवी संस्था.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* RIGHT COLUMN: Donation Confirmation & Receipt Upload Form */}
                        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">

                            <div className="border-b border-slate-100 pb-5 mb-6">
                                <span className="text-[11px] font-black text-[#f59e0b] uppercase tracking-wider">
                                    स्टेप २ • Step 2
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a] font-['Hind',sans-serif] mt-1">
                                    देणगी तपशील व पावती अपलोड करा
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                    पेमेंट केल्यानंतर आपले नाव, पत्ता, आधार नंबर, UTR नंबर व पावतीचा स्क्रीनशॉट जोडून सबमिट करा.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Amount Selection Chips */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2 font-['Hind',sans-serif]">
                                        देणगी रक्कम निवडा (Select Amount) *
                                    </label>
                                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                                        {presetAmounts.map((amt) => (
                                            <button
                                                type="button"
                                                key={amt}
                                                onClick={() => handleAmountSelect(amt)}
                                                className={`py-2 px-1 rounded-xl text-xs sm:text-sm font-black transition-all ${formData.amount === String(amt) && !formData.customAmount
                                                    ? 'bg-[#f59e0b] text-white shadow-xs scale-102 ring-2 ring-[#f59e0b]/40'
                                                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200'
                                                    }`}
                                            >
                                                ₹{amt.toLocaleString('en-IN')}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="mt-3">
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center font-bold text-slate-500 text-sm">
                                                ₹
                                            </span>
                                            <input
                                                type="text"
                                                placeholder="इतर रक्कम प्रविष्ट करा (Custom Amount)"
                                                value={formData.customAmount}
                                                onChange={handleCustomAmountChange}
                                                className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Name & Mobile Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 font-['Hind',sans-serif]">
                                            आपले पूर्ण नाव (Full Name) *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="उदा. राहुल प्रकाश पाटील"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition"
                                        />
                                    </div>

                                    {/* Mobile Number */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 font-['Hind',sans-serif]">
                                            मोबाईल नंबर (Mobile Number) *
                                        </label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center font-bold text-slate-500 text-xs">
                                                +91
                                            </span>
                                            <input
                                                type="tel"
                                                required
                                                maxLength={10}
                                                placeholder="98XXXXXXXX"
                                                value={formData.mobile}
                                                onChange={handleMobileChange}
                                                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Aadhaar Number & Transaction / UTR ID Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Aadhaar Card Number */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 font-['Hind',sans-serif]">
                                            आधार कार्ड नंबर (Aadhaar Card No.) *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            maxLength={14}
                                            placeholder="1234 5678 9012"
                                            value={formData.aadhaar}
                                            onChange={handleAadhaarChange}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition tracking-wider"
                                        />
                                    </div>

                                    {/* Transaction / UTR ID */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 font-['Hind',sans-serif]">
                                            ट्रान्झॅक्शन / UTR नंबर (Txn ID) *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="12 अंकी UPI Ref / UTR No."
                                            value={formData.transactionId}
                                            onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition uppercase"
                                        />
                                    </div>
                                </div>

                                {/* Full Address */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 font-['Hind',sans-serif]">
                                        संपूर्ण पत्ता (Full Address) *
                                    </label>
                                    <textarea
                                        rows={2}
                                        required
                                        placeholder="घर/फ्लॅट क्र., रस्ता, गाव/शहर, तालुका, जिल्हा, पिन कोड"
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition resize-none"
                                    />
                                </div>

                                {/* Payment Receipt Upload Area */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 font-['Hind',sans-serif]">
                                        पेमेंट पावती / स्क्रीनशॉट अपलोड करा (Upload Receipt) *
                                    </label>

                                    {!receiptFile ? (
                                        <div
                                            onDragOver={handleDragOver}
                                            onDrop={handleDrop}
                                            onClick={() => fileInputRef.current?.click()}
                                            className="border-2 border-dashed border-slate-300 hover:border-[#f59e0b] rounded-2xl p-6 text-center cursor-pointer bg-slate-50/70 hover:bg-amber-50/30 transition group"
                                        >
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                onChange={handleFileChange}
                                                accept="image/png, image/jpeg, image/jpg, image/webp, application/pdf"
                                                className="hidden"
                                            />
                                            <div className="w-12 h-12 rounded-full bg-amber-100 text-[#f59e0b] flex items-center justify-center mx-auto mb-2.5 group-hover:scale-110 transition-transform">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <p className="text-xs sm:text-sm font-bold text-slate-800 font-['Hind',sans-serif]">
                                                येथे फाईल निवडा किंवा स्क्रीनशॉट ड्रॅग करा (Click to Browse)
                                            </p>
                                            <p className="text-[11px] text-slate-500 mt-1">
                                                JPG, PNG, WEBP किंवा PDF (कमाल 8MB)
                                            </p>
                                        </div>
                                    ) : (
                                        /* Uploaded File Preview */
                                        <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-3 overflow-hidden">
                                                {receiptPreview === 'pdf' ? (
                                                    <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0">
                                                        PDF
                                                    </div>
                                                ) : (
                                                    <img
                                                        src={receiptPreview}
                                                        alt="Receipt Preview"
                                                        className="w-12 h-12 rounded-xl object-cover border border-emerald-300 shrink-0"
                                                    />
                                                )}
                                                <div className="overflow-hidden">
                                                    <p className="font-bold text-xs text-slate-800 truncate">{receiptFile.name}</p>
                                                    <p className="text-[10px] text-emerald-700 font-semibold">
                                                        {(receiptFile.size / (1024 * 1024)).toFixed(2)} MB • यशस्वी जोडली गेली ✓
                                                    </p>
                                                </div>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={removeFile}
                                                className="px-3 py-1.5 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 text-xs font-bold transition shrink-0"
                                            >
                                                बदला / Remove
                                            </button>
                                        </div>
                                    )}

                                    {fileError && (
                                        <p className="text-xs text-red-600 font-semibold mt-1.5">
                                            ⚠️ {fileError}
                                        </p>
                                    )}
                                </div>

                                {/* Optional PAN Card (for 80G Tax Exemption) */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 font-['Hind',sans-serif]">
                                            पॅन कार्ड नंबर (PAN No. - पर्यायी)
                                        </label>
                                        <input
                                            type="text"
                                            maxLength={10}
                                            placeholder="ABCDE1234F (80G सवलतीसाठी)"
                                            value={formData.pan}
                                            onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase() })}
                                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition uppercase"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 font-['Hind',sans-serif]">
                                            देणगीचा हेतू (Donation Purpose)
                                        </label>
                                        <select
                                            value={formData.purpose}
                                            onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition"
                                        >
                                            <option value="सामान्य समाजकार्य (General Support)">सामान्य समाजकार्य (General Support)</option>
                                            <option value="विद्यार्थी शिक्षण मदत (Child Education)">विद्यार्थी शिक्षण मदत (Child Education)</option>
                                            <option value="आरोग्य व रुग्णसेवा (Healthcare & Medical)">आरोग्य व रुग्णसेवा (Healthcare & Medical)</option>
                                            <option value="वृक्षारोपण व पर्यावरण (Tree Plantation)">वृक्षारोपण व पर्यावरण (Tree Plantation)</option>
                                            <option value="महिला सक्षमीकरण (Women Empowerment)">महिला सक्षमीकरण (Women Empowerment)</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-3">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] disabled:bg-amber-300 text-white font-black text-sm sm:text-base py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-98"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                <span>तपशील सबमिट होत आहेत...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>देणगी तपशील सबमिट करा (Submit Details)</span>
                                                <span>→</span>
                                            </>
                                        )}
                                    </button>
                                </div>

                                <p className="text-[11px] text-center text-slate-500 leading-normal">
                                    🔒 आपली माहिती १००% सुरक्षित व गोपनीय ठेवली जाते. सबमिट केल्यानंतर आपल्या व्हाट्सअ‍ॅपवर पावती पाठवली जाईल.
                                </p>

                            </form>

                        </div>

                    </div>
                )}

            </div>
        </div>
    );
};

export default Donate;
