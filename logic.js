/**
 * 🎨 نظام الألوان المعتمد (Premium Education Palette):
 * sky, teal, indigo, amber, emerald, purple, violet, slate, cyan, rose
 */
// ================= الأيقونات =================
const ICONS = {
    youtube: `<svg class="w-7 h-7" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/></svg>`,
    checkCircle: `<svg class="w-6 h-6 md:w-7 md:h-7 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    checkCircleLarge: `<svg class="w-7 h-7 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    xCircle: `<svg class="w-6 h-6 md:w-7 md:h-7 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
    xCircleLarge: `<svg class="w-7 h-7 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
    refresh: `<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`,
    arrowLeft: `<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
    arrowRight: `<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 19"></polyline></svg>`,
    medal: `<svg class="w-24 h-24 md:w-32 md:h-32 mx-auto text-amber-400 mb-6 drop-shadow-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    tray: `<svg class="w-8 h-8 md:w-12 md:h-12 mb-2 opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>`,
    flipIcon: `<svg class="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`
};
// =========================================================================
// وظائف جافا سكريبت الأساسية
// =========================================================================
const toArabicNum = (num) => {
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return String(num).split('').map(c => arabicNumbers[c] || c).join('');
};

const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

const AppHelpers = {
    getResultBoxHTML: (title, theme, score, total, extraClasses = 'mt-12') => {
        const expandClass = extraClasses.includes('smooth-expand') ? '' : (extraClasses === 'mt-12' ? '' : ' smooth-expand');
        return `<div class="${extraClasses} p-8 md:p-10 bg-white border-2 border-${theme}-200 rounded-2xl shadow-sm text-center max-w-2xl mx-auto w-full${expandClass}"><h3 class="text-2xl md:text-3xl font-semibold text-slate-700 mb-6">نتيجتك في قسم (${title})</h3><div class="text-4xl md:text-5xl font-bold text-${theme}-600 flex items-center justify-center gap-3"><span>${toArabicNum(score)}</span><span class="text-2xl md:text-3xl text-slate-400 font-medium mt-1">من</span><span>${toArabicNum(total)}</span></div></div>`;
    },
    getFeedbackBoxHTML: (isCorrect, explanation, correctLabel = 'إجابة صحيحة', incorrectLabel = 'إجابة خاطئة') => {
        const bgClass = isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-orange-50 border-orange-200';
        const textClass = isCorrect ? 'text-emerald-700' : 'text-orange-700';
        const iconHTML = isCorrect ? `<span class="text-emerald-700">${ICONS.checkCircleLarge}</span>` : `<span class="text-orange-700">${ICONS.xCircleLarge}</span>`;
        const label = isCorrect ? correctLabel : incorrectLabel;
        const expClass = isCorrect ? 'text-emerald-800' : 'text-orange-800';
        return `<div class="mt-6 p-5 rounded-xl border text-right ${bgClass}"><div class="flex items-center justify-start gap-2 mb-3 font-bold text-xl md:text-2xl ${textClass}">${iconHTML}<span>${label}</span></div><div class="text-xl md:text-2xl font-semibold leading-relaxed ${expClass} pr-1">${explanation}</div></div>`;
    },
    getHintBoxHTML: (hintText) => {
        return `<div class="bg-amber-50 text-amber-900 p-4 rounded-xl text-xl font-medium border border-amber-200 flex gap-2 items-start text-right"><span class="text-amber-500 font-semibold mt-1 shrink-0">💡</span><span class="leading-relaxed">${hintText}</span></div>`;
    }
};

const App = {
    state: { activeTab: '', progress: {}, sectionData: {} },
    init() {
        document.title = APP_DATA.pageTitle;
        if (APP_DATA.sections.length > 0) this.state.activeTab = APP_DATA.sections[0].id;
        this.initSectionData();
        this.renderLayout();
        this.updateUI();
    },
    initSectionData() {
        this.state.progress = {};
        this.state.sectionData = {};
        APP_DATA.sections.forEach(sec => {
            if (sec.type === 'intro' || sec.type === 'contrast_cards') {
                this.state.progress[sec.id] = { answered: 1, total: 1, score: 1 };
                this.state.sectionData[sec.id] = { activeIndex: 0 };
            }
            else if (sec.type === 'radar') {
                this.state.progress[sec.id] = { answered: 1, total: 1, score: 1 };
                this.state.sectionData[sec.id] = { activeBranch: null };
            }
            else if (sec.type === 'style_lab' || sec.type === 'toolbelt') {
                this.state.progress[sec.id] = { answered: 1, total: 1, score: 1 };
                this.state.sectionData[sec.id] = { currentIdx: 0, selectedId: null };
            }
            else if (sec.type === 'mcq') {
                this.state.progress[sec.id] = { answered: 0, total: sec.questions.length, score: 0 };
                this.state.sectionData[sec.id] = sec.questions.map(q => {
                    let opts = q.options.map((opt, oIdx) => ({ text: opt, isCorrect: oIdx === q.correct }));
                    return { originalQuestion: q, options: shuffleArray(opts), answered: false, selectedOption: null, showHint: false, hintAnimate: false, answerAnimate: false };
                });
            }
            else if (sec.type === 'tap_to_fill') {
                this.state.progress[sec.id] = { answered: 0, total: sec.questions.length, score: 0 };
                this.state.sectionData[sec.id] = sec.questions.map(q => {
                    let opts = q.options.map((opt, oIdx) => ({ text: opt, isCorrect: oIdx === q.correct }));
                    return { originalQuestion: q, options: shuffleArray(opts), answered: false, selectedOption: null, showHint: false, hintAnimate: false, answerAnimate: false };
                });
            }
            else if (sec.type === 'classify') {
                this.state.progress[sec.id] = { answered: 0, total: sec.questions.length, score: 0 };
                let placedItems = {};
                sec.categories.forEach(c => placedItems[c.id] = []);
                this.state.sectionData[sec.id] = { questions: shuffleArray(sec.questions).map(q => ({ originalQuestion: q, showHint: false, hintAnimate: false })), currentIndex: 0, status: 'idle', placedItems: placedItems, animatingOut: false };
            }
            else if (sec.type === 'error_correction') {
                this.state.progress[sec.id] = { answered: 0, total: sec.questions.length, score: 0 };
                this.state.sectionData[sec.id] = sec.questions.map(q => {
                    let opts = q.options.map((opt, oIdx) => ({ text: opt, isCorrect: oIdx === q.correctOptionIndex }));
                    return { originalQuestion: q, options: shuffleArray(opts), step: 1, selectedWordIndex: null, selectedOption: null, showHint: false, hintAnimate: false, optionsAnimate: false, answerAnimate: false, shakeWordIndex: null };
                });
            }
            else if (sec.type === 'flashcards') {
                this.state.progress[sec.id] = { answered: 0, total: sec.cards.length, score: 0 };
                this.state.sectionData[sec.id] = { cards: sec.cards, currentIndex: 0, isFlipped: false, animatingOut: false, showHint: false, hintAnimate: false };
            }
            else if (sec.type === 'sort') {
                this.state.progress[sec.id] = { answered: 0, total: sec.questions.length, score: 0 };
                this.state.sectionData[sec.id] = {
                    questions: sec.questions.map(q => {
                        let opts = q.options.map((opt, i) => ({ text: opt, isCorrect: i === q.correct }));
                        return { originalQuestion: q, options: opts, showHint: false, hintAnimate: false };
                    }),
                    currentIndex: 0, status: 'idle', animatingOut: false
                };
            }
            else if (sec.type === 'spotting') {
                this.state.progress[sec.id] = { answered: 0, total: sec.questions.length, score: 0 };
                this.state.sectionData[sec.id] = sec.questions.map(q => {
                    return { originalQuestion: q, answered: false, selectedWordIndex: null, showHint: false, hintAnimate: false, answerAnimate: false, shakeWordIndex: null };
                });
            }
            else if (sec.type === 'golden_envelope') {
                this.state.progress[sec.id] = { answered: 1, total: 1, score: 1 };
                this.state.sectionData[sec.id] = { status: 'opened' };
            }
            else if (sec.type === 'story') {
                this.state.progress[sec.id] = { answered: 1, total: sec.slides.length, score: sec.slides.length };
                this.state.sectionData[sec.id] = { currentIndex: 0 };
            }
            else if (sec.type === 'hotspot') {
                this.state.progress[sec.id] = { answered: 0, total: sec.questions.length, score: 0 };
                this.state.sectionData[sec.id] = sec.questions.map(q => ({
                    originalQuestion: q,
                    selectedTargets: [],
                    answered: false,
                    showHint: false,
                    hintAnimate: false,
                    answerAnimate: false,
                    shakeWordId: null
                }));
            }
            else if (sec.type === 'matching') {
                this.state.progress[sec.id] = { answered: 0, total: sec.pairs.length, score: 0 };
                this.state.sectionData[sec.id] = {
                    rightItems: shuffleArray(sec.pairs.map(p => ({ id: p.id, text: p.right }))),
                    leftItems: shuffleArray(sec.pairs.map(p => ({ id: p.id, text: p.left }))),
                    selectedRight: null, selectedLeft: null, matchedPairs: [], wrongAttempt: false
                };
            }
        });
    },
    renderLayout() {
        const root = document.getElementById('app-root');
        let sectionsContainers = '';
        APP_DATA.sections.forEach(sec => { sectionsContainers += `<div id="section-${sec.id}" class="hidden"></div>`; });
        root.innerHTML = `
                    <div id="main-header" class="w-full text-center py-6 bg-transparent flex flex-col items-center">
                        <a href="${APP_DATA.youtubeLink}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 text-2xl font-bold text-purple-900 md:hover:text-purple-800 md:hover:scale-105 active:scale-95 transition-transform duration-300 mb-1">
                            <span>${APP_DATA.headerTitle}</span>${ICONS.youtube}
                        </a>
                        <h2 class="text-lg font-bold text-slate-600 md:hover:text-slate-700 md:hover:-translate-x-1 transition-transform duration-300 cursor-default inline-block">${APP_DATA.headerSubtitle}</h2>
                    </div>
                    <div id="sticky-tabs-container" class="sticky top-0 z-50 bg-[#f8fafc]/95 backdrop-blur-md shadow-sm border-b border-slate-200">
                        <div id="tabs-container" class="mx-auto w-max max-w-full overflow-x-auto px-4 no-scrollbar scroll-smooth">
                            <div id="tabs-wrapper" class="flex items-center gap-3 py-3 flex-nowrap"></div>
                        </div>
                        <div class="w-full h-[4px] bg-slate-200"><div id="progress-bar" class="h-full transition-all duration-500 ease-out" style="width: 0%"></div></div>
                    </div>
                    <main class="container mx-auto px-4 pb-8 max-w-4xl flex-grow min-h-[75vh]">
                        <div id="scroll-target"></div>
                        <h1 class="text-center text-2xl md:text-3xl font-semibold text-slate-700 pt-6 mb-6 bg-transparent">${APP_DATA.pageTitle.split('|')[0]}</h1>
                        ${sectionsContainers}
                        <div id="final-evaluation-container"></div>
                    </main>
                    <footer class="mt-auto py-8 bg-white border-t border-slate-200 text-center">
                        <a href="${APP_DATA.youtubeLink}" target="_blank" rel="noopener noreferrer" class="text-slate-400 text-sm font-medium block w-full">${APP_DATA.copyright}</a>
                    </footer>
                `;
    },
    updateUI() {
        this.updateTabs();
        APP_DATA.sections.forEach(sec => {
            const el = document.getElementById(`section-${sec.id}`);
            if (el) {
                if (this.state.activeTab === sec.id) {
                    el.className = 'block';
                    el.innerHTML = this.renderSection(sec);
                } else { el.className = 'hidden'; }
            }
        });
        this.checkFinalEvaluation();
    },
    updateTabs() {
        const wrapper = document.getElementById('tabs-wrapper');
        let html = '';
        APP_DATA.sections.forEach(section => {
            const isActive = this.state.activeTab === section.id;
            const secProgress = this.state.progress[section.id];
            // التأكد من أن القسم يحتوي على أسئلة قابلة للتقييم لكي نعرض علامة الصح
            const isScorableSection = !['intro', 'story', 'golden_envelope', 'style_lab', 'radar', 'contrast_cards', 'toolbelt'].includes(section.type);
            const isDone = isScorableSection && secProgress.total > 0 && secProgress.answered === secProgress.total;

            let activeClass = isActive ? `bg-${section.theme}-600 text-white border-${section.theme}-600 shadow-md` : "bg-white text-slate-600 border-slate-200";
            html += `
                        <button id="tab-${section.id}" type="button" onclick="App.handleTabChange('${section.id}')" class="shrink-0 whitespace-nowrap px-6 py-2 rounded-full font-semibold text-lg md:text-xl border-2 transition-all flex items-center justify-center gap-2 active:scale-95 ${activeClass}">
                            ${section.title}${isDone && !isActive ? `<span class="text-emerald-600">${ICONS.checkCircle}</span>` : ''}
                        </button>
                    `;
        });
        wrapper.innerHTML = html;

        const activeSectionDef = APP_DATA.sections.find(s => s.id === this.state.activeTab);
        const isScorableActive = !['intro', 'story', 'golden_envelope', 'style_lab', 'radar', 'contrast_cards', 'toolbelt'].includes(activeSectionDef.type);
        const currentProgress = this.state.progress[this.state.activeTab];
        const progressPercent = (currentProgress && currentProgress.total > 0 && isScorableActive) ? (currentProgress.answered / currentProgress.total) * 100 : 0;

        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            progressBar.className = `h-full transition-all duration-500 ease-out bg-${activeSectionDef.theme}-500`;
            progressBar.style.width = `${progressPercent}%`;
            // إخفاء حاوية شريط التقدم بالكامل إذا كان القسم لا يحتوي على درجات
            progressBar.parentElement.style.display = isScorableActive ? 'block' : 'none';
        }
    },
    renderSection(sectionData) {
        switch (sectionData.type) {
            case 'intro': return this.renderIntro(sectionData);
            case 'style_lab': return this.renderStyleLab(sectionData);
            case 'radar': return this.renderRadar(sectionData);
            case 'contrast_cards': return this.renderContrastCards(sectionData);
            case 'toolbelt': return this.renderToolbelt(sectionData);
            case 'classify': return this.renderClassify(sectionData);
            case 'error_correction': return this.renderErrorCorrection(sectionData);
            case 'flashcards': return this.renderFlashcards(sectionData);
            case 'mcq': return this.renderStandardSection(sectionData);
            case 'tap_to_fill': return this.renderTapToFill(sectionData);
            case 'sort': return this.renderSort(sectionData);
            case 'spotting': return this.renderSpotting(sectionData);
            case 'golden_envelope': return this.renderGoldenEnvelope(sectionData);
            case 'story': return this.renderStory(sectionData);
            case 'hotspot': return this.renderHotspot(sectionData);
            case 'matching': return this.renderMatching(sectionData);
            default: return '';
        }
    },

    showSectionResult(sectionId, sectionDef, progress) {
        const resultArea = document.getElementById(`section-result-area-${sectionId}`);
        if (resultArea) {
            resultArea.innerHTML = AppHelpers.getResultBoxHTML(sectionDef.title, sectionDef.theme, progress.score, progress.total, 'mt-12 smooth-expand');
        }
        const footerArea = document.getElementById(`section-footer-area-${sectionId}`);
        if (footerArea) {
            footerArea.innerHTML = `<div class="smooth-expand w-full">${this.renderSectionFooterControls(sectionId, true)}</div>`;
        }
    },

    // --- دوال الأقسام الجديدة المضافة (New Custom Activities) ---

    renderRadar(sectionData) {
        const map = sectionData.mapData;
        const state = this.state.sectionData[sectionData.id];

        let html = `<div class="max-w-4xl mx-auto fade-in flex flex-col items-center" id="radar-container-${sectionData.id}">`;
        if (sectionData.description) {
            html += `<div class="text-center mb-10 w-full"><p class="text-lg md:text-xl text-${sectionData.theme}-800 font-semibold bg-${sectionData.theme}-50 bg-opacity-60 p-4 md:p-5 rounded-2xl shadow-sm inline-block w-full">${sectionData.description}</p></div>`;
        }

        // المركز
        html += `
                <div class="w-full max-w-md bg-white border-4 border-${sectionData.theme}-500 text-slate-800 rounded-[2.5rem] p-6 md:p-8 text-center shadow-lg z-10 relative mb-12 md:hover:scale-105 transition-transform duration-300">
                    <div class="text-xs md:text-sm font-bold text-${sectionData.theme}-500 mb-2 uppercase tracking-widest">${map.center.title}</div>
                    <h3 class="text-2xl md:text-3xl font-bold leading-relaxed">${map.center.text}</h3>
                </div>
                `;

        // الأذرع كأزرار
        html += `<div class="flex flex-wrap justify-center gap-4 w-full relative z-10 mb-8" id="radar-buttons-${sectionData.id}">`;
        map.branches.forEach((branch, idx) => {
            const isActive = state.activeBranch === idx;
            const btnClass = isActive
                ? `bg-${branch.color}-500 text-white shadow-md transform scale-105 ring-4 ring-${branch.color}-200`
                : `bg-white text-slate-700 border-2 border-${branch.color}-200 md:hover:bg-${branch.color}-50`;

            html += `
                    <button id="radar-btn-${sectionData.id}-${idx}" onclick="App.handleRadarClick('${sectionData.id}', ${idx})" class="flex-1 min-w-[140px] max-w-[180px] p-4 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 active:scale-95 ${btnClass}">
                        <span class="text-3xl md:text-4xl">${branch.icon}</span>
                        <span class="font-bold text-sm md:text-base text-center leading-snug">${branch.title}</span>
                    </button>
                    `;
        });
        html += `</div>`;

        // منطقة عرض التفاصيل
        html += `<div id="radar-details-${sectionData.id}" class="w-full min-h-[14rem] flex items-center justify-center transition-all duration-500 mb-6">`;
        html += this.getRadarDetailsHTML(sectionData, state.activeBranch);
        html += `</div>`;

        html += `</div>`;
        html += `<div class="w-full mt-4">` + this.renderSectionFooterControls(sectionData.id, true) + `</div>`;
        return html;
    },

    getRadarDetailsHTML(sectionData, activeBranchIdx) {
        if (activeBranchIdx !== null) {
            const activeBranch = sectionData.mapData.branches[activeBranchIdx];
            return `
                    <div class="bg-${activeBranch.color}-50 border-2 border-${activeBranch.color}-200 rounded-3xl p-6 md:p-8 shadow-inner w-full max-w-2xl text-center fade-in flex flex-col items-center justify-center min-h-[14rem]">
                        <div class="text-4xl md:text-5xl mb-4 bg-white p-4 rounded-full shadow-sm border border-${activeBranch.color}-100 shrink-0">${activeBranch.icon}</div>
                        <h4 class="text-2xl font-bold text-${activeBranch.color}-800 mb-4">${activeBranch.title}</h4>
                        <p class="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">${activeBranch.text}</p>
                    </div>
                    `;
        } else {
            return `
                    <div class="border-2 border-dashed border-slate-300 rounded-3xl p-8 w-full max-w-2xl text-center text-slate-400 flex flex-col items-center justify-center fade-in bg-slate-50/50 min-h-[14rem]">
                        <span class="text-4xl md:text-5xl mb-3 opacity-60">👆</span>
                        <span class="text-lg md:text-xl font-medium">انقر على أحد الأذرع بالأعلى لعرض تفاصيله</span>
                    </div>
                    `;
        }
    },

    handleRadarClick(sectionId, idx) {
        const state = this.state.sectionData[sectionId];
        if (state.activeBranch === idx) return;

        state.activeBranch = idx;
        const sectionData = APP_DATA.sections.find(s => s.id === sectionId);

        // تحديث كلاسات الأزرار بدون إعادة رسم القسم بالكامل
        sectionData.mapData.branches.forEach((branch, i) => {
            const btn = document.getElementById(`radar-btn-${sectionId}-${i}`);
            if (btn) {
                if (i === idx) {
                    btn.className = `flex-1 min-w-[140px] max-w-[180px] p-4 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 active:scale-95 bg-${branch.color}-500 text-white shadow-md transform scale-105 ring-4 ring-${branch.color}-200`;
                } else {
                    btn.className = `flex-1 min-w-[140px] max-w-[180px] p-4 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 active:scale-95 bg-white text-slate-700 border-2 border-${branch.color}-200 md:hover:bg-${branch.color}-50`;
                }
            }
        });

        // تحديث صندوق التفاصيل فقط بنعومة
        const detailsContainer = document.getElementById(`radar-details-${sectionId}`);
        if (detailsContainer) {
            detailsContainer.innerHTML = this.getRadarDetailsHTML(sectionData, idx);
        }
    },

    renderStyleLab(sectionData) {
        const sectionId = sectionData.id;
        const state = this.state.sectionData[sectionId];
        let excerptHTML = this.getStyleLabExcerptHTML(sectionData, state);

        let html = `<div class="max-w-4xl mx-auto fade-in">`;
        if (sectionData.description) { html += `<div class="text-center mb-8"><p class="text-lg md:text-xl text-${sectionData.theme}-800 font-semibold bg-${sectionData.theme}-50 bg-opacity-60 p-4 md:p-5 rounded-2xl shadow-sm inline-block w-full">${sectionData.description}</p></div>`; }

        html += `<div id="style-lab-container-${sectionId}" class="w-full relative min-h-[300px]">`;
        html += excerptHTML;
        html += `</div>`;

        html += `</div>`;
        html += `<div class="w-full mt-6">` + this.renderSectionFooterControls(sectionData.id, true) + `</div>`;
        return html;
    },

    getStyleLabExcerptHTML(sectionData, state) {
        const sectionId = sectionData.id;
        const excerpt = sectionData.excerpts[state.currentIdx];
        const selectedSeg = excerpt.segments.find(s => s.id === state.selectedId);
        const total = sectionData.excerpts.length;

        let textHTML = '';
        excerpt.segments.forEach(seg => {
            if (seg.isHighlight) {
                const isSelected = state.selectedId === seg.id;
                let classes = `inline font-bold px-1.5 py-0.5 rounded cursor-pointer transition-all duration-300 select-none `;
                if (isSelected) {
                    classes += `bg-${sectionData.theme}-500 text-white shadow-md`;
                } else {
                    classes += `bg-${sectionData.theme}-100 text-${sectionData.theme}-800 border-b-2 border-${sectionData.theme}-300 hover:bg-${sectionData.theme}-200`;
                }
                textHTML += `<span class="${classes}" onclick="App.handleStyleLabClick('${sectionId}', '${seg.id}')">${seg.text}</span>`;
            } else {
                textHTML += `<span class="text-slate-800">${seg.text}</span>`;
            }
        });

        let html = `
                <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10 transition-all duration-300">
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-${sectionData.theme}-600 font-bold text-lg md:text-xl">القطعة ${toArabicNum(state.currentIdx + 1)} من ${toArabicNum(total)}</span>
                    </div>
                    <div class="text-2xl md:text-3xl leading-[2.5] md:leading-[3] text-right font-medium text-slate-800 mb-8 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-inner">
                        ${textHTML}
                    </div>
                    
                    <div class="min-h-[8rem] w-full transition-all duration-300">
                        ${selectedSeg ? `
                        <div class="bg-${sectionData.theme}-50 border border-${sectionData.theme}-200 rounded-2xl p-6 text-right smooth-expand">
                            <h4 class="text-${sectionData.theme}-800 font-bold text-xl md:text-2xl mb-3 flex items-center gap-2"><span class="text-2xl">💡</span> التفسير:</h4>
                            <p class="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">${selectedSeg.explanation}</p>
                        </div>
                        ` : `
                        <div class="flex items-center justify-center h-full text-slate-400 font-medium text-lg md:text-xl border-2 border-dashed border-slate-200 rounded-2xl p-6 min-h-[8rem]">
                            انقر على الكلمات الملونة في النص لاكتشاف وظيفتها البلاغية واللغوية.
                        </div>
                        `}
                    </div>
                    
                    <div class="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
                        <button ${state.currentIdx === 0 ? 'disabled' : `onclick="App.handleStyleLabNav('${sectionId}', -1)"`} class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 active:scale-95 transition-all text-lg ${state.currentIdx === 0 ? 'opacity-50 pointer-events-none' : ''}">${ICONS.arrowRight} السابق</button>
                        <button ${state.currentIdx === total - 1 ? 'disabled' : `onclick="App.handleStyleLabNav('${sectionId}', 1)"`} class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-${sectionData.theme}-100 text-${sectionData.theme}-700 font-bold hover:bg-${sectionData.theme}-200 active:scale-95 transition-all text-lg ${state.currentIdx === total - 1 ? 'opacity-50 pointer-events-none' : ''}">التالي ${ICONS.arrowLeft}</button>
                    </div>
                </div>`;
        return html;
    },

    handleStyleLabClick(sectionId, id) {
        this.state.sectionData[sectionId].selectedId = id;
        const container = document.getElementById(`style-lab-container-${sectionId}`);
        if (container) {
            const sectionData = APP_DATA.sections.find(s => s.id === sectionId);
            container.innerHTML = this.getStyleLabExcerptHTML(sectionData, this.state.sectionData[sectionId]);
        }
    },

    handleStyleLabNav(sectionId, dir) {
        const state = this.state.sectionData[sectionId];
        const sectionData = APP_DATA.sections.find(s => s.id === sectionId);
        const newIdx = state.currentIdx + dir;
        if (newIdx >= 0 && newIdx < sectionData.excerpts.length) {
            state.currentIdx = newIdx;
            state.selectedId = null;
            const container = document.getElementById(`style-lab-container-${sectionId}`);
            if (container) {
                container.innerHTML = this.getStyleLabExcerptHTML(sectionData, state);
                this.scrollToActiveCard(sectionId);
            }
        }
    },

    renderToolbelt(sectionData) {
        const sectionId = sectionData.id;
        const state = this.state.sectionData[sectionId];
        let excerptHTML = this.getToolbeltExcerptHTML(sectionData, state);

        let html = `<div class="max-w-4xl mx-auto fade-in">`;
        if (sectionData.description) { html += `<div class="text-center mb-8 fade-in"><p class="text-lg md:text-xl text-${sectionData.theme}-800 font-semibold bg-${sectionData.theme}-50 bg-opacity-60 p-4 md:p-5 rounded-2xl shadow-sm inline-block w-full">${sectionData.description}</p></div>`; }

        html += `<div id="toolbelt-container-${sectionId}" class="w-full relative min-h-[300px]">`;
        html += excerptHTML;
        html += `</div>`;

        html += `</div>`;
        html += `<div class="w-full mt-6">` + this.renderSectionFooterControls(sectionData.id, true) + `</div>`;
        return html;
    },

    getToolbeltExcerptHTML(sectionData, state) {
        const sectionId = sectionData.id;
        const excerpt = sectionData.excerpts[state.currentIdx];
        const selectedTool = excerpt.tools.find(t => t.id === state.selectedId);
        const total = sectionData.excerpts.length;

        let toolsHTML = `<div class="flex flex-wrap justify-center gap-3 mb-6">`;
        excerpt.tools.forEach(tool => {
            const isSelected = state.selectedId === tool.id;
            const btnClass = isSelected
                ? `bg-${sectionData.theme}-600 text-white shadow-md cursor-default`
                : `bg-white text-slate-600 border-2 border-slate-200 hover:bg-slate-50 active:scale-95 cursor-pointer`;
            toolsHTML += `<button onclick="App.handleToolbeltClick('${sectionId}', '${tool.id}')" class="px-5 py-3 rounded-xl font-bold text-lg md:text-xl transition-all ${btnClass}">${tool.name}</button>`;
        });
        toolsHTML += `</div>`;

        let highlightedText = excerpt.text;
        if (selectedTool && selectedTool.targets) {
            selectedTool.targets.forEach(target => {
                const replaceWith = `<span class="bg-${sectionData.theme}-200 text-${sectionData.theme}-900 font-bold px-1.5 py-0.5 rounded shadow-sm">${target}</span>`;
                highlightedText = highlightedText.split(target).join(replaceWith);
            });
        }

        let html = `
                <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10 transition-all duration-300">
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-${sectionData.theme}-600 font-bold text-lg md:text-xl">القطعة ${toArabicNum(state.currentIdx + 1)} من ${toArabicNum(total)}</span>
                    </div>
                    
                    ${toolsHTML}

                    <div class="text-2xl md:text-3xl leading-[2.5] md:leading-[3] text-right font-medium text-slate-800 mb-8 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-inner min-h-[8rem] transition-all whitespace-pre-line">
                        ${highlightedText}
                    </div>
                    
                    <div class="min-h-[8rem] w-full transition-all duration-300">
                        ${selectedTool ? `
                        <div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-right smooth-expand">
                            <h4 class="text-amber-800 font-bold text-xl md:text-2xl mb-3 flex items-center gap-2"><span class="text-2xl">🔍</span> أثر الأداة:</h4>
                            <p class="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">${selectedTool.explanation}</p>
                        </div>
                        ` : `
                        <div class="flex items-center justify-center h-full text-slate-400 font-medium text-lg md:text-xl border-2 border-dashed border-slate-200 rounded-2xl p-6 min-h-[8rem]">
                            انقر على أحد صناديق الأدوات بالأعلى لتحديد موقعها في النص.
                        </div>
                        `}
                    </div>

                    <div class="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
                        <button ${state.currentIdx === 0 ? 'disabled' : `onclick="App.handleToolbeltNav('${sectionId}', -1)"`} class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 active:scale-95 transition-all text-lg ${state.currentIdx === 0 ? 'opacity-50 pointer-events-none' : ''}">${ICONS.arrowRight} السابق</button>
                        <button ${state.currentIdx === total - 1 ? 'disabled' : `onclick="App.handleToolbeltNav('${sectionId}', 1)"`} class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-${sectionData.theme}-100 text-${sectionData.theme}-700 font-bold hover:bg-${sectionData.theme}-200 active:scale-95 transition-all text-lg ${state.currentIdx === total - 1 ? 'opacity-50 pointer-events-none' : ''}">التالي ${ICONS.arrowLeft}</button>
                    </div>
                </div>`;
        return html;
    },

    handleToolbeltClick(sectionId, id) {
        this.state.sectionData[sectionId].selectedId = id;
        const container = document.getElementById(`toolbelt-container-${sectionId}`);
        if (container) {
            const sectionData = APP_DATA.sections.find(s => s.id === sectionId);
            container.innerHTML = this.getToolbeltExcerptHTML(sectionData, this.state.sectionData[sectionId]);
        }
    },

    handleToolbeltNav(sectionId, dir) {
        const state = this.state.sectionData[sectionId];
        const sectionData = APP_DATA.sections.find(s => s.id === sectionId);
        const newIdx = state.currentIdx + dir;
        if (newIdx >= 0 && newIdx < sectionData.excerpts.length) {
            state.currentIdx = newIdx;
            state.selectedId = null;
            const container = document.getElementById(`toolbelt-container-${sectionId}`);
            if (container) {
                container.innerHTML = this.getToolbeltExcerptHTML(sectionData, state);
                this.scrollToActiveCard(sectionId);
            }
        }
    },

    renderContrastCards(sectionData) {
        let html = `<div class="max-w-4xl mx-auto fade-in">`;
        if (sectionData.description) { html += `<div class="text-center mb-10 fade-in"><p class="text-lg md:text-xl text-${sectionData.theme}-800 font-semibold bg-${sectionData.theme}-50 bg-opacity-60 p-4 md:p-5 rounded-2xl shadow-sm inline-block w-full">${sectionData.description}</p></div>`; }

        html += `<div class="flex flex-col gap-6 md:gap-8">`;
        sectionData.pairs.forEach((pair) => {
            html += `
                    <div class="relative bg-white rounded-3xl border border-slate-200 shadow-md p-5 md:p-8 flex flex-col gap-5 overflow-hidden md:hover:shadow-lg transition-shadow">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="bg-sky-50 border-2 border-sky-200 rounded-2xl p-6 text-center shadow-inner flex items-center justify-center min-h-[6rem]">
                                <h4 class="text-2xl md:text-3xl font-bold text-sky-800">${pair.right}</h4>
                            </div>
                            <div class="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 text-center shadow-inner flex items-center justify-center min-h-[6rem]">
                                <h4 class="text-2xl md:text-3xl font-bold text-rose-800">${pair.left}</h4>
                            </div>
                        </div>
                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[calc(50%+2rem)] bg-white rounded-full w-14 h-14 shadow-lg border border-slate-100 hidden md:flex items-center justify-center font-black text-slate-400 text-xl z-10">
                            VS
                        </div>
                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-5 md:p-6 text-center mt-2">
                            <p class="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">${pair.desc}</p>
                        </div>
                    </div>
                    `;
        });
        html += `</div></div>`;
        html += `<div class="w-full mt-6">` + this.renderSectionFooterControls(sectionData.id, true) + `</div>`;
        return html;
    },

    // --- دوال الأقسام الأساسية المحدثة للعمل بالتحديث الجزئي (Partial Updates) ---

    renderIntro(sectionData) {
        let headerHTML = '';
        if (sectionData.description) {
            headerHTML += `<div class="text-center mb-10 fade-in"><p class="text-lg md:text-xl text-${sectionData.theme}-800 font-semibold bg-${sectionData.theme}-50 bg-opacity-60 p-4 md:p-5 rounded-2xl shadow-sm inline-block w-full">${sectionData.description}</p></div>`;
        }
        let gridHTML = '<div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full fade-in">';

        sectionData.content.forEach(block => {
            gridHTML += `
                    <div class="bg-white border-2 border-${block.theme}-200 rounded-[2rem] p-6 md:p-8 shadow-sm md:hover:-translate-y-2 md:hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group cursor-default">
                        <div class="w-16 h-16 md:w-20 md:h-20 bg-${block.theme}-100 rounded-full flex items-center justify-center text-3xl md:text-4xl mb-8 md:group-hover:scale-110 md:group-hover:-rotate-3 transition-transform duration-300 shrink-0">
                            ${block.icon}
                        </div>
                        <h3 class="text-2xl md:text-3xl font-bold text-${block.theme}-800 mb-4 leading-relaxed w-full">${block.title}</h3>
                        <p class="text-lg md:text-xl font-medium text-slate-600 leading-relaxed mb-6 flex-grow w-full">${block.desc}</p>
                        <div class="w-full bg-${block.theme}-50/80 rounded-2xl p-5 text-center space-y-3 mt-auto">
                            <div class="text-lg md:text-xl font-bold text-${block.theme}-900 leading-relaxed">${block.examples}</div>
                        </div>
                    </div>`;
        });

        gridHTML += '</div>';
        return `<div class="max-w-4xl mx-auto pb-6">${headerHTML}${gridHTML}<div class="flex justify-center mt-12 pt-4 fade-in"><button onclick="App.handleNextSection()" class="bg-${sectionData.theme}-600 md:hover:bg-${sectionData.theme}-700 text-white font-semibold text-xl md:text-2xl py-4 px-12 rounded-full shadow-lg flex items-center gap-3 active:scale-95 transition-all duration-300">القسم التالي ${ICONS.arrowLeft}</button></div></div>`;
    },

    renderStandardSection(sectionData) {
        const sectionId = sectionData.id;
        const progress = this.state.progress[sectionId];
        const isComplete = progress.total > 0 && progress.answered === progress.total;
        const questions = this.state.sectionData[sectionId];
        let html = '<div class="fade-in">';
        if (sectionData.description) { html += `<div class="text-center mb-8"><p class="text-lg md:text-xl text-${sectionData.theme}-800 font-semibold bg-${sectionData.theme}-50 bg-opacity-60 p-4 md:p-5 rounded-2xl shadow-sm inline-block w-full">${sectionData.description}</p></div>`; }
        questions.forEach((qState, idx) => { html += `<div id="${sectionId}-wrapper-${idx}">${this.renderQuestionCard(qState, idx, sectionId, sectionData.theme, sectionData.type)}</div>`; });

        html += `<div id="section-result-area-${sectionId}">`;
        if (isComplete) { html += AppHelpers.getResultBoxHTML(sectionData.title, sectionData.theme, progress.score, progress.total, 'mt-12'); }
        html += '</div></div>';
        html += `<div id="section-footer-area-${sectionId}" class="w-full">`;
        html += this.renderSectionFooterControls(sectionId, isComplete);
        html += `</div>`;
        return html;
    },

    renderQuestionCard(qState, idx, sectionId, theme, type) {
        const { originalQuestion: q, options, answered, selectedOption, showHint, hintAnimate, answerAnimate } = qState;
        const isSelectedCorrect = selectedOption && selectedOption.isCorrect;
        const hintFadeClass = hintAnimate ? 'smooth-expand' : '';
        const answerFadeClass = answerAnimate ? 'smooth-expand' : '';
        let ringClass = answered ? (isSelectedCorrect ? 'ring-2 ring-emerald-400' : 'ring-2 ring-rose-400') : '';
        let optionsHTML = '';
        options.forEach((opt, optIdx) => {
            let btnClass = `w-full p-4 md:p-5 rounded-xl border-2 transition-all font-semibold text-xl md:text-2xl flex items-center gap-3 justify-start `;
            if (!answered) { btnClass += `border-slate-200 bg-white text-slate-600 active:scale-95 md:hover:bg-slate-50 cursor-pointer`; } else {
                if (opt.isCorrect) btnClass += "bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm";
                else if (selectedOption === opt) btnClass += "bg-rose-50 border-rose-500 text-rose-800 shadow-sm";
                else btnClass += "bg-slate-50 border-slate-100 text-slate-400 opacity-60";
                btnClass += " cursor-default";
            }
            let numClass = `w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-xl md:text-2xl font-bold shrink-0 transition-all `;
            if (answered) numClass += opt.isCorrect ? 'bg-emerald-500 text-white shadow-sm' : (selectedOption === opt ? 'bg-rose-500 text-white shadow-sm' : 'bg-slate-100 text-slate-400 border border-slate-200');
            else numClass += `bg-white text-${theme}-600 shadow-md border border-slate-100`;
            let numberingHTML = `<div class="${numClass}">${toArabicNum(optIdx + 1)}</div>`;
            optionsHTML += `<button ${answered ? 'disabled' : ''} onclick="App.handleAnswer('${sectionId}', ${idx}, ${optIdx})" class="${btnClass}">${numberingHTML}<span class="relative z-10 flex-grow text-right">${opt.text}</span>${answered && opt.isCorrect ? ICONS.checkCircle : ''}${answered && selectedOption === opt && !opt.isCorrect ? ICONS.xCircle : ''}</button>`;
        });
        return `
                <div id="${sectionId}-q-${idx}" class="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-slate-200 mb-8 relative transition-colors duration-300 flex flex-col justify-start ${ringClass}">
                    <div class="bg-slate-50 p-4 md:p-6 rounded-xl border border-slate-100 mb-6 w-full mx-auto">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-${theme}-600 font-bold text-lg md:text-xl">السؤال ${toArabicNum(idx + 1)}</span>
                            <button onclick="App.toggleHint('${sectionId}', ${idx})" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-lg md:text-xl font-bold transition-all active:scale-95 text-amber-500 md:hover:bg-amber-50">💡 تلميح</button>
                        </div>
                        <h3 class="text-2xl md:text-3xl font-semibold text-slate-800 leading-snug whitespace-pre-line text-right">${q.text}</h3>
                        <div id="hint-area-${sectionId}-${idx}" class="${showHint ? `block w-full ${hintFadeClass}` : 'hidden'} mt-2">
                            ${AppHelpers.getHintBoxHTML(q.hint)}
                        </div>
                    </div>
                    <div id="options-area-${sectionId}-${idx}" class="grid gap-3 mx-auto w-full max-w-md flex-grow grid-cols-1 content-start">
                        ${optionsHTML}
                    </div>
                    <div id="feedback-area-${sectionId}-${idx}" class="${answered ? `block w-full ${answerFadeClass}` : 'hidden'}">
                        ${answered ? AppHelpers.getFeedbackBoxHTML(isSelectedCorrect, q.explanation) : ''}
                    </div>
                </div>`;
    },

    // --- فرز البطاقات (Sort) عبر التحديث الجزئي ---
    renderSort(sectionData) {
        let html = `<div id="${sectionData.id}-sort-container" class="fade-in">`;
        html += this.renderSortInner(sectionData);
        html += `</div>`;
        return html;
    },

    renderSortInner(sectionData) {
        const sectionId = sectionData.id; const theme = sectionData.theme; const state = this.state.sectionData[sectionId]; const { questions, currentIndex, status, animatingOut } = state; const isComplete = currentIndex >= questions.length;
        let html = '<div class="flex flex-col items-center w-full gap-6">';
        if (sectionData.description) { html += `<div class="text-center w-full"><p class="text-lg md:text-xl text-${theme}-800 font-semibold bg-${theme}-50 bg-opacity-60 p-4 md:p-5 rounded-2xl shadow-sm">${sectionData.description}</p></div>`; }
        let boxesHTML = ''; if (!isComplete) {
            const colors = ['emerald', 'violet', 'cyan', 'teal', 'indigo', 'sky', 'rose'];
            state.questions[currentIndex].options.forEach((opt, idx) => {
                const boxTheme = colors[idx % colors.length]; let btnClass = `flex-1 flex flex-col items-center justify-center p-3 md:p-5 border-2 md:border-4 rounded-xl md:rounded-2xl transition-all duration-300 border-${boxTheme}-200 text-${boxTheme}-700 bg-${boxTheme}-50 `;
                if (!animatingOut && status !== 'correct') { btnClass += `md:hover:border-${boxTheme}-400 md:hover:bg-${boxTheme}-100 md:hover:-translate-y-1 cursor-pointer shadow-sm md:hover:shadow-md active:scale-95`; } else { btnClass += `opacity-60 cursor-default grayscale-[30%]`; }
                boxesHTML += `<button ${(!animatingOut && status !== 'correct') ? `onclick="App.handleDynamicSortClick('${sectionId}', ${idx})"` : 'disabled'} class="${btnClass} min-w-[120px]"><span class="font-bold text-lg md:text-xl text-center leading-snug">${opt.text}</span></button>`;
            });
        }

        const currentQState = isComplete ? null : state.questions[currentIndex];
        const showHint = currentQState ? currentQState.showHint : false;
        const hintFadeClass = currentQState && currentQState.hintAnimate ? 'smooth-expand' : '';

        html += `<div class="relative w-full min-h-[12rem] bg-slate-50 rounded-3xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-4 md:p-6 transition-all duration-500">${!isComplete ? `<div class="w-full max-w-2xl bg-white p-5 md:p-8 rounded-2xl shadow-lg border-2 border-slate-200 transition-all transform leading-snug flex flex-col justify-start z-10 ${animatingOut ? 'fly-out' : 'fade-in'} ${status === 'incorrect' ? 'shake' : ''}"><div class="flex items-center justify-between mb-4"><span class="text-${theme}-600 font-bold text-lg md:text-xl">البطاقة ${toArabicNum(currentIndex + 1)}</span><button onclick="App.toggleHint('${sectionId}', ${currentIndex})" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-lg md:text-xl font-bold transition-all active:scale-95 text-amber-500 md:hover:bg-amber-50">💡 تلميح</button></div><h3 class="text-3xl md:text-4xl font-bold leading-snug text-slate-800 text-center">«${currentQState.originalQuestion.text}»</h3><div id="hint-area-${sectionId}-${currentIndex}" class="${showHint ? `block w-full ${hintFadeClass}` : 'hidden'} mt-4">${AppHelpers.getHintBoxHTML(currentQState.originalQuestion.hint)}</div><div class="${status === 'incorrect' ? 'block w-full smooth-expand' : 'hidden'} mt-5"><div class="p-4 bg-orange-50 border border-orange-200 rounded-xl text-center text-orange-700 text-lg md:text-xl font-bold shadow-sm">⚠️ إجابة خاطئة! ${currentQState.originalQuestion.explanation || currentQState.originalQuestion.hint || 'حاول مرة أخرى'}</div></div></div>` : `<div class="text-3xl md:text-4xl font-bold text-emerald-500 flex flex-col items-center gap-4 fade-in py-6"><span class="text-6xl">🎉</span><span>اكتملت فرز البطاقات!</span></div>`}</div>${!isComplete ? `<div class="flex flex-row w-full max-w-2xl mx-auto gap-2 md:gap-4 mt-2 relative z-0 flex-wrap justify-center">${boxesHTML}</div>` : ''}</div>`;
        if (isComplete) { const progress = this.state.progress[sectionId]; html += AppHelpers.getResultBoxHTML(sectionData.title, theme, progress.score, progress.total, 'mt-12 smooth-expand'); }
        html += `<div id="section-footer-area-${sectionId}" class="w-full">` + this.renderSectionFooterControls(sectionId, isComplete) + `</div>`;
        return html;
    },

    updateSortPartial(sectionId) {
        const sectionDef = APP_DATA.sections.find(s => s.id === sectionId);
        const container = document.getElementById(`${sectionId}-sort-container`);
        if (container) {
            container.innerHTML = this.renderSortInner(sectionDef);
        }
    },

    renderSpotting(sectionData) {
        const sectionId = sectionData.id;
        const progress = this.state.progress[sectionId];
        const isComplete = progress.total > 0 && progress.answered === progress.total;
        const questions = this.state.sectionData[sectionId];
        let html = '<div class="fade-in">';
        if (sectionData.description) { html += `<div class="text-center mb-8"><p class="text-lg md:text-xl text-${sectionData.theme}-800 font-semibold bg-${sectionData.theme}-50 bg-opacity-60 p-4 md:p-5 rounded-2xl shadow-sm inline-block w-full">${sectionData.description}</p></div>`; }
        questions.forEach((qState, idx) => { html += `<div id="${sectionId}-wrapper-${idx}">${this.renderSpottingCard(qState, idx, sectionData.theme, sectionId)}</div>`; });

        html += `<div id="section-result-area-${sectionId}">`;
        if (isComplete) { html += AppHelpers.getResultBoxHTML(sectionData.title, sectionData.theme, progress.score, progress.total, 'mt-12'); }
        html += '</div></div>';
        html += `<div id="section-footer-area-${sectionId}" class="w-full">`;
        html += this.renderSectionFooterControls(sectionId, isComplete);
        html += `</div>`;
        return html;
    },

    renderSpottingCard(qState, idx, theme, sectionId) {
        const { originalQuestion: q, answered, selectedWordIndex, showHint, hintAnimate, answerAnimate, shakeWordIndex } = qState;
        const hintFadeClass = hintAnimate ? 'smooth-expand' : '';
        const answerFadeClass = answerAnimate ? 'smooth-expand' : '';
        let ringClass = answered ? 'ring-2 ring-emerald-400' : '';

        let wordsHTML = '';
        q.words.forEach((word, wIdx) => {
            const isTarget = q.targetIndices ? q.targetIndices.includes(wIdx) : q.targetIndex === wIdx;
            const isSelectedCorrect = answered && isTarget;
            const isShaking = shakeWordIndex === wIdx;

            let wordClass = "px-4 md:px-6 py-3 md:py-4 text-2xl md:text-3xl font-bold rounded-xl transition-all duration-300 select-none ";
            if (!answered) {
                wordClass += `bg-white border-2 border-slate-200 text-slate-700 md:hover:border-${theme}-300 md:hover:bg-${theme}-50 md:hover:-translate-y-1 md:hover:shadow-md active:scale-95 cursor-pointer `;
                if (isShaking) wordClass += "bg-orange-100 border-orange-400 text-orange-700 shake ";
            } else {
                if (isSelectedCorrect) wordClass += `bg-emerald-500 text-white border-2 border-emerald-600 shadow-md cursor-default `;
                else wordClass += "bg-white border-2 border-slate-200 text-slate-700 cursor-default ";
            }
            wordsHTML += `<button ${answered ? 'disabled' : ''} onclick="App.handleSpottingWordClick('${sectionId}', ${idx}, ${wIdx})" class="${wordClass}">${word}</button>`;
        });

        return `
                <div id="${sectionId}-q-${idx}" class="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-slate-200 mb-8 relative transition-colors duration-300 flex flex-col justify-start ${ringClass}">
                    <div class="bg-slate-50 p-4 md:p-6 rounded-xl border border-slate-100 mb-6 w-full mx-auto">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-${theme}-600 font-bold text-lg md:text-xl">السؤال ${toArabicNum(idx + 1)}</span>
                            <button onclick="App.toggleHint('${sectionId}', ${idx})" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-lg md:text-xl font-bold transition-all active:scale-95 text-amber-500 md:hover:bg-amber-50">💡 تلميح</button>
                        </div>
                        <h3 class="text-2xl md:text-3xl font-semibold text-slate-800 leading-snug whitespace-pre-line text-right">${q.text}</h3>
                        <div id="hint-area-${sectionId}-${idx}" class="${showHint ? `block w-full ${hintFadeClass}` : 'hidden'} mt-2">
                            ${AppHelpers.getHintBoxHTML(q.hint)}
                        </div>
                    </div>
                    <div id="words-area-${sectionId}-${idx}" class="flex flex-wrap justify-center items-center gap-3 md:gap-4 leading-loose mx-auto w-full max-w-2xl" dir="rtl">
                        ${wordsHTML}
                    </div>
                    <div id="feedback-area-${sectionId}-${idx}" class="${answered ? `block w-full ${answerFadeClass}` : 'hidden'}">
                        ${answered ? AppHelpers.getFeedbackBoxHTML(true, q.explanation, 'أحسنت الاختيار') : ''}
                    </div>
                </div>`;
    },

    renderHotspot(sectionData) {
        const sectionId = sectionData.id;
        const progress = this.state.progress[sectionId];
        const isComplete = progress.total > 0 && progress.answered === progress.total;
        const questions = this.state.sectionData[sectionId];

        let html = '<div class="fade-in">';
        if (sectionData.description) { html += `<div class="text-center mb-8"><p class="text-lg md:text-xl text-${sectionData.theme}-800 font-semibold bg-${sectionData.theme}-50 bg-opacity-60 p-4 md:p-5 rounded-2xl shadow-sm inline-block w-full">${sectionData.description}</p></div>`; }

        questions.forEach((qState, idx) => { html += `<div id="${sectionId}-wrapper-${idx}">${this.renderHotspotCard(qState, idx, sectionData.theme, sectionId)}</div>`; });

        html += `<div id="section-result-area-${sectionId}">`;
        if (isComplete) { html += AppHelpers.getResultBoxHTML(sectionData.title, sectionData.theme, progress.score, progress.total, 'mt-12'); }
        html += '</div></div>';
        html += `<div id="section-footer-area-${sectionId}" class="w-full">`;
        html += this.renderSectionFooterControls(sectionId, isComplete);
        html += `</div>`;
        return html;
    },

    renderHotspotCard(qState, idx, theme, sectionId) {
        const { originalQuestion: q, answered, selectedTargets, showHint, hintAnimate, answerAnimate, shakeWordId } = qState;
        const hintFadeClass = hintAnimate ? 'smooth-expand' : '';
        const answerFadeClass = answerAnimate ? 'smooth-expand' : '';
        let ringClass = answered ? 'ring-2 ring-emerald-400' : '';

        let textHTML = '';
        q.paragraph.forEach((segment) => {
            const isSelected = selectedTargets.includes(segment.id);
            const isShaking = shakeWordId === segment.id;

            let segClass = "inline leading-loose px-1.5 py-0.5 rounded transition-all duration-300 text-2xl md:text-3xl select-none ";

            if (!answered) {
                segClass += `cursor-pointer border-b-2 border-transparent md:hover:bg-${theme}-100 md:hover:border-${theme}-300 `;
                if (isSelected) segClass += "bg-emerald-200 text-emerald-800 font-bold border-emerald-400 ";
                else if (isShaking) segClass += "bg-rose-200 text-rose-800 font-bold border-rose-400 shake ";
                else segClass += "text-slate-800 font-medium ";
            } else {
                if (isSelected) segClass += "bg-emerald-200 text-emerald-800 font-bold border-b-2 border-emerald-400 cursor-default ";
                else if (segment.isTarget && !isSelected) segClass += "bg-emerald-100 text-emerald-700 border-b-2 border-emerald-300 cursor-default ";
                else segClass += "text-slate-600 font-medium cursor-default ";
            }

            textHTML += `<span ${answered || isSelected ? '' : `onclick="App.handleHotspotClick('${sectionId}', ${idx}, '${segment.id}')"`} class="${segClass}">${segment.text}</span>`;
        });

        const progressCount = `${toArabicNum(selectedTargets.length)} / ${toArabicNum(q.requiredCount)}`;

        return `
                <div id="${sectionId}-q-${idx}" class="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-slate-200 mb-8 relative transition-colors duration-300 flex flex-col justify-start ${ringClass}">
                    <div class="bg-slate-50 p-4 md:p-6 rounded-xl border border-slate-100 mb-6 w-full mx-auto">
                        <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                            <span class="text-${theme}-600 font-bold text-lg md:text-xl">السؤال ${toArabicNum(idx + 1)}</span>
                            <div class="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                                <span class="font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 text-sm md:text-base tracking-wider">المستخرج: ${progressCount}</span>
                                <button onclick="App.toggleHint('${sectionId}', ${idx})" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-lg md:text-xl font-bold transition-all active:scale-95 text-amber-500 md:hover:bg-amber-50">💡 تلميح</button>
                            </div>
                        </div>
                        <h3 class="text-xl md:text-2xl font-bold text-slate-700 leading-snug whitespace-pre-line text-right mb-2">📌 ${q.task}</h3>
                        <div id="hint-area-${sectionId}-${idx}" class="${showHint ? `block w-full ${hintFadeClass}` : 'hidden'} mt-2">
                            ${AppHelpers.getHintBoxHTML(q.hint)}
                        </div>
                    </div>
                    <div id="hotspot-text-area-${sectionId}-${idx}" class="w-full text-right leading-[2.5] md:leading-[3] p-4 md:p-6 bg-white border border-slate-100 rounded-xl shadow-inner text-slate-800">
                        ${textHTML}
                    </div>
                    <div id="feedback-area-${sectionId}-${idx}" class="${answered ? `block w-full ${answerFadeClass}` : 'hidden'}">
                        ${answered ? AppHelpers.getFeedbackBoxHTML(true, q.explanation, 'أحسنت الاستخراج!') : ''}
                    </div>
                </div>`;
    },

    renderMatching(sectionData) {
        let html = `<div class="fade-in" id="${sectionData.id}-matching-wrapper">`;
        if (sectionData.description) { html += `<div class="text-center mb-8"><p class="text-lg md:text-xl text-${sectionData.theme}-800 font-semibold bg-${sectionData.theme}-50 bg-opacity-60 p-4 md:p-5 rounded-2xl shadow-sm inline-block w-full">${sectionData.description}</p></div>`; }

        html += `<div id="${sectionData.id}-matching-container">`;
        html += this.renderMatchingInner(sectionData);
        html += `</div>`;

        html += `<div id="section-result-area-${sectionData.id}">`;
        const progress = this.state.progress[sectionData.id];
        const isComplete = progress.answered === progress.total;
        if (isComplete) {
            html += AppHelpers.getResultBoxHTML(sectionData.title, sectionData.theme, progress.score, progress.total, 'mt-12');
        }
        html += '</div>';
        html += `<div id="section-footer-area-${sectionData.id}" class="w-full">` + this.renderSectionFooterControls(sectionData.id, isComplete) + `</div></div>`;
        return html;
    },

    renderMatchingInner(sectionData) {
        const sectionId = sectionData.id;
        const theme = sectionData.theme;
        const state = this.state.sectionData[sectionId];
        const progress = this.state.progress[sectionId];
        const isComplete = progress.answered === progress.total;

        let html = `<div class="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-slate-200 mb-8 relative transition-all duration-300 ${state.wrongAttempt ? 'shake ring-2 ring-rose-400' : ''}">`;
        html += `<div class="flex justify-between items-center mb-6 px-4 bg-slate-50 py-3 rounded-xl border border-slate-100">`;
        html += `<span class="text-${theme}-600 font-bold text-lg md:text-xl">اربط بين كل بطاقتين</span>`;
        html += `</div>`;

        html += `<div class="relative w-full z-10">`;
        html += `<div class="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>`;
        html += `<div class="grid grid-cols-2 gap-x-3 md:gap-x-8 gap-y-3 w-full relative z-10">`;

        const maxLength = Math.max(state.rightItems.length, state.leftItems.length);

        for (let i = 0; i < maxLength; i++) {
            const rightItem = state.rightItems[i];
            const leftItem = state.leftItems[i];

            if (rightItem) {
                const isMatchedR = state.matchedPairs.includes(rightItem.id);
                const isSelectedR = state.selectedRight === rightItem.id;
                let rBtnClass = `w-full h-full p-3 md:p-4 rounded-xl border-2 font-bold text-center transition-all duration-300 text-sm md:text-lg flex items-center justify-center min-h-[4.5rem] md:min-h-[5rem] `;

                if (isMatchedR) {
                    rBtnClass += `bg-emerald-50 border-emerald-200 text-emerald-700 opacity-90 cursor-default shadow-sm`;
                } else if (isSelectedR) {
                    rBtnClass += `bg-${theme}-100 border-${theme}-500 text-${theme}-800 shadow-md ring-2 ring-${theme}-200 ring-offset-1`;
                } else if (state.wrongAttempt && state.selectedRight === rightItem.id) {
                    rBtnClass += `bg-rose-100 border-rose-500 text-rose-800 shadow-md`;
                } else {
                    rBtnClass += `bg-white border-slate-200 text-slate-700 md:hover:bg-${theme}-50 md:hover:border-${theme}-300 cursor-pointer active:scale-95 shadow-sm`;
                }

                html += `<button ${isMatchedR ? 'disabled' : ''} onclick="App.handleMatchingClick('${sectionId}', 'right', '${rightItem.id}')" class="${rBtnClass}">${rightItem.text}</button>`;
            } else {
                html += `<div></div>`;
            }

            if (leftItem) {
                const isMatchedL = state.matchedPairs.includes(leftItem.id);
                const isSelectedL = state.selectedLeft === leftItem.id;
                let lBtnClass = `w-full h-full p-3 md:p-4 rounded-xl border-2 font-bold text-center transition-all duration-300 text-sm md:text-lg flex items-center justify-center min-h-[4.5rem] md:min-h-[5rem] `;

                if (isMatchedL) {
                    lBtnClass += `bg-emerald-50 border-emerald-200 text-emerald-700 opacity-90 cursor-default shadow-sm`;
                } else if (isSelectedL) {
                    lBtnClass += `bg-${theme}-100 border-${theme}-500 text-${theme}-800 shadow-md ring-2 ring-${theme}-200 ring-offset-1`;
                } else if (state.wrongAttempt && state.selectedLeft === leftItem.id) {
                    lBtnClass += `bg-rose-100 border-rose-500 text-rose-800 shadow-md`;
                } else {
                    lBtnClass += `bg-white border-slate-200 text-slate-700 md:hover:bg-emerald-50 md:hover:border-emerald-300 cursor-pointer active:scale-95 shadow-sm`;
                }

                html += `<button ${isMatchedL ? 'disabled' : ''} onclick="App.handleMatchingClick('${sectionId}', 'left', '${leftItem.id}')" class="${lBtnClass}">${leftItem.text}</button>`;
            } else {
                html += `<div></div>`;
            }
        }

        html += `</div></div></div>`;

        if (isComplete) {
            html += `<div class="text-2xl md:text-3xl font-bold text-emerald-600 flex flex-col items-center gap-3 fade-in py-6 bg-emerald-50 border-2 border-emerald-200 w-full max-w-lg mx-auto rounded-3xl shadow-sm mt-4"><span class="text-5xl">🏆</span><span>اكتملت المطابقة بنجاح!</span></div>`;
        }

        return html;
    },

    updateMatchingPartial(sectionId) {
        const sectionDef = APP_DATA.sections.find(s => s.id === sectionId);
        const container = document.getElementById(`${sectionId}-matching-container`);
        if (container) {
            container.innerHTML = this.renderMatchingInner(sectionDef);
        }
    },

    renderErrorCorrection(sectionData) {
        const sectionId = sectionData.id; const progress = this.state.progress[sectionId]; const isComplete = progress.total > 0 && progress.answered === progress.total; const questions = this.state.sectionData[sectionId];
        let html = '<div class="fade-in">';
        if (sectionData.description) { html += `<div class="text-center mb-8"><p class="text-lg md:text-xl text-${sectionData.theme}-800 font-semibold bg-${sectionData.theme}-50 bg-opacity-60 p-4 md:p-5 rounded-2xl shadow-sm inline-block w-full">${sectionData.description}</p></div>`; }
        questions.forEach((qState, idx) => { html += `<div id="${sectionId}-wrapper-${idx}">${this.renderErrorCard(qState, idx, sectionData.theme, sectionId)}</div>`; });

        html += `<div id="section-result-area-${sectionId}">`;
        if (isComplete) { html += AppHelpers.getResultBoxHTML(sectionData.title, sectionData.theme, progress.score, progress.total, 'mt-12'); }
        html += '</div></div>';
        html += `<div id="section-footer-area-${sectionId}" class="w-full">`;
        html += this.renderSectionFooterControls(sectionId, isComplete);
        html += `</div>`;
        return html;
    },
    renderErrorCard(qState, idx, theme, sectionId) {
        const { originalQuestion: q, step, selectedWordIndex, selectedOption, showHint, hintAnimate, optionsAnimate, answerAnimate, shakeWordIndex } = qState;
        const isStep3 = step === 3; const isSelectedCorrect = selectedOption && selectedOption.isCorrect;
        const hintFadeClass = hintAnimate ? 'smooth-expand' : '';
        const optionsFadeClass = optionsAnimate ? 'smooth-expand' : '';
        const answerFadeClass = answerAnimate ? 'smooth-expand' : '';

        let ringClass = isStep3 ? (isSelectedCorrect ? 'ring-2 ring-emerald-400' : 'ring-2 ring-rose-400') : '';
        let wordsHTML = ''; q.words.forEach((word, wIdx) => {
            const isSelected = selectedWordIndex === wIdx; const isShaking = shakeWordIndex === wIdx;
            let wordClass = "px-4 md:px-6 py-3 md:py-4 text-2xl md:text-3xl font-bold rounded-xl transition-all duration-300 select-none border-2 ";
            let displayText = word;

            if (step === 1) {
                wordClass += `bg-white border-slate-200 text-slate-700 md:hover:border-${theme}-300 md:hover:bg-${theme}-50 md:hover:-translate-y-1 md:hover:shadow-md active:scale-95 cursor-pointer `;
                if (isShaking) wordClass += "bg-orange-100 border-orange-400 text-orange-700 shake ";
            } else {
                if (isSelected) {
                    if (isStep3) {
                        displayText = selectedOption.text;
                        if (isSelectedCorrect) {
                            wordClass += "bg-emerald-500 text-white border-emerald-600 ";
                        } else {
                            wordClass += "bg-rose-500 text-white border-rose-600 ";
                        }
                    } else {
                        wordClass += "bg-rose-500 text-white border-rose-600 ";
                    }
                } else {
                    wordClass += "bg-white border-slate-200 text-slate-700 cursor-default ";
                }
            }
            wordsHTML += `<button ${step !== 1 ? 'disabled' : ''} onclick="App.handleErrorWordClick('${sectionId}', ${idx}, ${wIdx})" class="${wordClass}">${displayText}</button>`;
        });

        let optionsHTML = '';
        if (step >= 2) {
            optionsHTML += `
                    <div class="${optionsFadeClass}">
                        <div class="mt-8 mb-4 text-center font-bold text-xl text-slate-600">اختر التصويب الصحيح:</div>
                        <div class="grid gap-3 grid-cols-1 md:grid-cols-3 w-full">
                    `;
            qState.options.forEach((opt, optIdx) => {
                let btnClass = `p-4 rounded-xl border-2 transition-all font-semibold text-xl md:text-2xl flex items-center justify-center gap-2 `;
                if (step === 2) { btnClass += `border-slate-200 bg-white text-slate-600 md:hover:bg-slate-50 active:scale-95 cursor-pointer`; } else { if (opt.isCorrect) btnClass += "bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm"; else if (selectedOption === opt) btnClass += "bg-rose-50 border-rose-500 text-rose-800 shadow-sm"; else btnClass += "bg-slate-50 border-slate-100 text-slate-400 opacity-50"; btnClass += " cursor-default"; }
                optionsHTML += `<button ${step === 3 ? 'disabled' : ''} onclick="App.handleErrorOptionClick('${sectionId}', ${idx}, ${optIdx})" class="${btnClass}">${opt.text}${step === 3 && opt.isCorrect ? ICONS.checkCircle : ''}${step === 3 && selectedOption === opt && !opt.isCorrect ? ICONS.xCircle : ''}</button>`;
            });
            optionsHTML += `</div></div>`;
        }

        return `
                <div id="${sectionId}-q-${idx}" class="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-slate-200 mb-8 relative transition-colors duration-300 flex flex-col justify-start ${ringClass}">
                    <div class="bg-slate-50 p-4 md:p-6 rounded-xl border border-slate-100 mb-6 w-full mx-auto">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-${theme}-600 font-bold text-lg md:text-xl">السؤال ${toArabicNum(idx + 1)}</span>
                            <button onclick="App.toggleHint('${sectionId}', ${idx})" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-lg md:text-xl font-bold transition-all active:scale-95 text-amber-500 md:hover:bg-amber-50">💡 تلميح</button>
                        </div>
                        <div id="hint-area-${sectionId}-${idx}" class="${showHint ? `block w-full ${hintFadeClass}` : 'hidden'} mt-2">
                            ${AppHelpers.getHintBoxHTML(q.hint)}
                        </div>
                    </div>
                    <div id="words-area-${sectionId}-${idx}" class="flex flex-wrap justify-center items-center gap-3 md:gap-4 leading-loose mx-auto w-full max-w-2xl">
                        ${wordsHTML}
                    </div>
                    <div id="options-area-${sectionId}-${idx}" class="w-full overflow-hidden">
                        ${optionsHTML}
                    </div>
                    <div id="feedback-area-${sectionId}-${idx}" class="${isStep3 ? `block w-full ${answerFadeClass}` : 'hidden'}">
                        ${isStep3 ? AppHelpers.getFeedbackBoxHTML(isSelectedCorrect, q.explanation) : ''}
                    </div>
                </div>`;
    },

    // --- البطاقات القلابة (Flashcards) عبر التحديث الجزئي ---
    renderFlashcards(sectionData) {
        let html = `<div id="${sectionData.id}-flashcards-container" class="fade-in">`;
        html += this.renderFlashcardsInner(sectionData);
        html += `</div>`;
        return html;
    },

    renderFlashcardsInner(sectionData) {
        const sectionId = sectionData.id; const theme = sectionData.theme; const state = this.state.sectionData[sectionId]; const { cards, currentIndex, isFlipped, animatingOut } = state; const isComplete = currentIndex >= cards.length;
        let html = `<div class="flex flex-col items-center w-full gap-6">`;
        if (sectionData.description) { html += `<div class="text-center w-full"><p class="text-lg md:text-xl text-${theme}-800 font-semibold bg-${theme}-50 bg-opacity-60 p-4 md:p-5 rounded-2xl shadow-sm">${sectionData.description}</p></div>`; }
        html += `<div class="relative w-full min-h-[20rem] flex flex-col items-center justify-center p-4 md:p-6 transition-all duration-500 perspective">`;
        if (!isComplete) {
            const card = cards[currentIndex]; const flippedClass = isFlipped ? 'rotate-y-180' : '';
            html += `<div class="w-full max-w-lg h-80 relative perspective ${animatingOut ? 'fly-out' : 'fade-in'}"><div id="flashcard-inner-${sectionId}" class="w-full h-full absolute preserve-3d flip-transition cursor-pointer active:scale-[0.98] ${flippedClass}" onclick="App.handleFlashcardFlip('${sectionId}')"><div class="absolute w-full h-full backface-hidden bg-white border-2 border-slate-200 rounded-3xl shadow-lg flex flex-col items-center justify-center p-8 text-center md:hover:border-${theme}-300 md:hover:shadow-xl transition-all"><span class="absolute top-6 right-6 text-${theme}-600 font-bold text-lg md:text-xl">البطاقة ${toArabicNum(currentIndex + 1)}</span><div class="text-slate-400 mb-4">${ICONS.flipIcon}</div><h3 class="text-4xl md:text-5xl font-medium text-slate-800 leading-snug">${card.front}</h3></div><div class="absolute w-full h-full backface-hidden bg-slate-50 border-2 border-${theme}-400 rounded-3xl shadow-lg flex flex-col items-center justify-center p-8 text-center rotate-y-180"><h3 class="text-2xl md:text-3xl font-medium text-${theme}-700 mb-4">${card.back}</h3><p class="text-xl font-medium text-slate-700 leading-relaxed mb-6">${card.explanation}</p><div class="w-full grid grid-cols-2 gap-3 mt-auto relative z-20" onclick="event.stopPropagation()"><button onclick="App.handleFlashcardAnswer('${sectionId}', true)" class="bg-emerald-500 md:hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-transform active:scale-95 shadow-md flex items-center justify-center gap-2 text-lg">${ICONS.checkCircle} عرفتها</button><button onclick="App.handleFlashcardAnswer('${sectionId}', false)" class="bg-rose-500 md:hover:bg-rose-600 text-white font-bold py-3 rounded-xl transition-transform active:scale-95 shadow-md flex items-center justify-center gap-2 text-lg">${ICONS.xCircle} أخطأت</button></div></div></div></div>`;
        } else { html += `<div class="text-3xl md:text-4xl font-bold text-emerald-500 flex flex-col items-center gap-4 fade-in py-10 bg-white border-2 border-emerald-200 w-full max-w-lg rounded-3xl shadow-lg"><span class="text-6xl">🏆</span><span>انتهت البطاقات!</span></div>`; }
        html += `</div></div>`;
        if (isComplete) { const progress = this.state.progress[sectionId]; html += AppHelpers.getResultBoxHTML(sectionData.title, theme, progress.score, progress.total, 'mt-8 smooth-expand'); }
        html += `<div id="section-footer-area-${sectionId}" class="w-full">` + this.renderSectionFooterControls(sectionId, isComplete) + `</div>`;
        return html;
    },

    updateFlashcardsPartial(sectionId) {
        const sectionDef = APP_DATA.sections.find(s => s.id === sectionId);
        const container = document.getElementById(`${sectionId}-flashcards-container`);
        if (container) {
            container.innerHTML = this.renderFlashcardsInner(sectionDef);
        }
    },

    // --- التصنيف (Classify) عبر التحديث الجزئي ---
    renderClassify(sectionData) {
        let html = `<div id="${sectionData.id}-classify-container" class="fade-in">`;
        html += this.renderClassifyInner(sectionData);
        html += `</div>`;
        return html;
    },

    renderClassifyInner(sectionData) {
        const sectionId = sectionData.id;
        const theme = sectionData.theme;
        const state = this.state.sectionData[sectionId];
        const { questions, currentIndex, status, placedItems, animatingOut } = state;
        const isComplete = currentIndex >= questions.length;

        let html = '';
        const currentQState = isComplete ? null : questions[currentIndex];
        const currentQuestion = isComplete ? null : currentQState.originalQuestion;

        const showHint = isComplete ? false : currentQState.showHint;
        const hintFadeClass = (currentQState && currentQState.hintAnimate) ? 'smooth-expand' : '';

        const shakeClass = status === 'incorrect' ? 'shake' : '';
        const disablePanelClass = (animatingOut || status === 'correct') ? 'pointer-events-none' : '';

        let actionButtonsHTML = '';
        if (!isComplete) {
            actionButtonsHTML += `<div class="w-full mt-4 border-t-2 border-slate-100 pt-6 flex flex-wrap justify-center gap-3 ${disablePanelClass}">`;
            sectionData.categories.forEach(cat => {
                const btnTheme = cat.theme || 'sky';
                let btnClass = `flex-1 min-w-[120px] max-w-[200px] flex items-center justify-center min-h-[4.5rem] md:min-h-[5rem] px-4 py-3 rounded-xl font-bold text-lg md:text-xl transition-all duration-300 border-2 text-center leading-relaxed `;

                if (!animatingOut && status !== 'correct') {
                    btnClass += `bg-${btnTheme}-50 border-${btnTheme}-200 text-${btnTheme}-700 md:hover:bg-${btnTheme}-100 md:hover:border-${btnTheme}-400 md:hover:-translate-y-1 active:scale-95 shadow-sm cursor-pointer`;
                } else {
                    btnClass += `bg-slate-50 border-slate-200 text-slate-400 opacity-60 cursor-default`;
                }

                actionButtonsHTML += `<button ${(!animatingOut && status !== 'correct') ? `onclick="App.handleClassifyClick('${sectionId}', '${cat.id}')"` : 'disabled'} class="${btnClass}">${cat.label}</button>`;
            });
            actionButtonsHTML += `</div>`;
        }

        let glassyTraysHTML = '';
        sectionData.categories.forEach(cat => {
            const boxTheme = cat.theme || 'sky';
            const placedHtml = placedItems[cat.id].map(item => `
                        <div class="mt-3 p-3 md:p-4 rounded-xl text-lg md:text-xl font-medium bg-white border-r-4 border-${boxTheme}-400 shadow-md leading-relaxed text-center text-slate-800 relative z-10">
                            ${item.text}
                        </div>
                    `).join('');

            let boxClass = `flex flex-col w-full pt-6 pb-5 px-5 md:px-6 rounded-[2.5rem] bg-white/50 backdrop-blur-sm border-2 border-slate-300 shadow-[inset_0_2px_8px_rgba(0,0,0,0.03)] min-h-[14rem] relative overflow-hidden`;
            const headerIcon = ICONS.tray.replace('w-8 h-8 md:w-12 md:h-12 mb-2 opacity-80', `w-6 h-6 md:w-8 md:h-8 text-${boxTheme}-600 shrink-0`);
            const watermarkIcon = ICONS.tray.replace('w-8 h-8 md:w-12 md:h-12 mb-2 opacity-80', 'w-full h-full');

            glassyTraysHTML += `
                    <div class="${boxClass}">
                        <div class="absolute top-0 left-0 w-full h-2 bg-${boxTheme}-400 opacity-60 z-10"></div>
                        <div class="absolute -bottom-10 -left-10 w-40 h-40 text-${boxTheme}-200 opacity-10 transform -rotate-12 scale-150 pointer-events-none z-0 flex items-center justify-center">
                            ${watermarkIcon}
                        </div>
                        <div class="flex flex-col items-center justify-center w-full relative z-10 mb-1">
                            <div class="flex items-center justify-center gap-3">
                                <div class="bg-white shadow-sm rounded-full p-2 border border-slate-100 flex items-center justify-center shrink-0">
                                    ${headerIcon}
                                </div>
                                <h3 class="font-bold text-2xl md:text-3xl text-slate-900 text-center">${cat.label}</h3>
                            </div>
                        </div>
                        <div class="h-px bg-slate-300 w-2/3 mx-auto my-3 relative z-10"></div>
                        <div class="flex flex-col gap-2 flex-grow relative z-10">
                            ${placedHtml}
                        </div>
                    </div>`;
        });

        html += `<div class="flex flex-col items-center w-full gap-6">`;
        if (sectionData.description) {
            html += `<div class="text-center w-full"><p class="text-lg md:text-xl text-${theme}-800 font-semibold bg-${theme}-50 bg-opacity-60 p-4 md:p-5 rounded-2xl shadow-sm">${sectionData.description}</p></div>`;
        }

        html += `<div class="relative w-full min-h-[15rem] transition-all duration-500 ease-in-out bg-slate-50 rounded-3xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-start pt-8 md:pt-12 px-4 pb-8 md:px-6">`;

        if (currentQuestion) {
            html += `
                    <div id="classify-card" class="w-full max-w-2xl bg-white p-5 md:p-8 rounded-2xl shadow-xl border-2 border-slate-200 leading-snug flex flex-col justify-start z-10 ${animatingOut ? 'fly-out' : 'fade-in'} ${shakeClass}">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-${theme}-600 font-bold text-lg md:text-xl">البطاقة ${toArabicNum(currentIndex + 1)}</span>
                            <button onclick="App.toggleHint('${sectionId}', ${currentIndex})" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-lg md:text-xl font-bold transition-all active:scale-95 text-amber-500 md:hover:bg-amber-50">💡 تلميح</button>
                        </div>
                        <span class="block mb-4 text-slate-500 text-sm md:text-base font-medium text-center">إلى أي صندوق تنتمي هذه البطاقة؟</span>
                        <div class="w-full min-h-[8rem] md:min-h-[10rem] flex flex-col items-center justify-center mb-2">
                            <h3 class="text-2xl md:text-3xl font-medium leading-[2.2] text-slate-800 text-center">«${currentQuestion.text}»</h3>
                        </div>
                        <div id="hint-area-${sectionId}-${currentIndex}" class="${showHint ? `block w-full mb-4 ${hintFadeClass}` : 'hidden'}">
                            ${AppHelpers.getHintBoxHTML(currentQuestion.hint)}
                        </div>
                        <div class="${status === 'incorrect' ? 'block w-full smooth-expand' : 'hidden'} mb-4">
                            <div class="p-4 bg-orange-50 border border-orange-200 rounded-xl text-center text-orange-700 text-lg md:text-xl font-bold shadow-sm">⚠️ ${currentQuestion.explanation || currentQuestion.hint || 'إجابة خاطئة، حاول مرة أخرى.'}</div>
                        </div>
                        ${actionButtonsHTML}
                    </div>`;
        } else {
            html += `<div class="w-full flex-grow flex flex-col items-center justify-center"><div class="text-3xl md:text-4xl font-bold text-emerald-500 flex flex-col items-center gap-4 fade-in py-6"><span class="text-6xl">🎉</span><span>اكتملت الصناديق بنجاح!</span></div></div>`;
        }
        html += `</div><div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">${glassyTraysHTML}</div></div>`;
        if (isComplete) {
            const progress = this.state.progress[sectionId];
            html += AppHelpers.getResultBoxHTML(sectionData.title, theme, progress.score, progress.total, 'mt-12 smooth-expand');
        }
        html += `<div id="section-footer-area-${sectionId}" class="w-full">` + this.renderSectionFooterControls(sectionId, isComplete) + `</div>`;
        return html;
    },

    updateClassifyPartial(sectionId) {
        const sectionDef = APP_DATA.sections.find(s => s.id === sectionId);
        const container = document.getElementById(`${sectionId}-classify-container`);
        if (container) {
            container.innerHTML = this.renderClassifyInner(sectionDef);
        }
    },

    // --- دالة عرض مسك الختام (الرسالة الذهبية تظهر مباشرة) ---
    renderGoldenEnvelope(sectionData) {
        const sectionId = sectionData.id;

        return `
                <div class="max-w-3xl mx-auto w-full fade-in" id="${sectionId}-container">
                    <div class="text-center mb-8 w-full">
                        <p class="text-lg md:text-xl text-slate-600 font-medium bg-white border border-slate-200 p-4 md:p-5 rounded-2xl shadow-sm inline-block w-full leading-relaxed">${sectionData.description}</p>
                    </div>

                    <div class="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] relative text-center">
                        
                        <div class="text-center mb-10">
                            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 text-amber-500 mb-4 shadow-sm border border-amber-100 text-3xl">✨</div>
                            <h2 class="text-2xl md:text-3xl font-bold text-slate-800">الرسالة الذهبية</h2>
                            <div class="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div class="mb-10 relative">
                            <div class="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 relative">
                                <span class="absolute -top-6 right-4 text-5xl text-slate-300 font-bold leading-none select-none pointer-events-none">"</span>
                                <h4 class="text-slate-500 font-bold text-sm md:text-base mb-4 uppercase tracking-wider flex items-center justify-center gap-2">
                                    <span class="bg-slate-200 text-slate-600 px-2 py-1 rounded text-xs">📌</span> اقتباس الدرس
                                </h4>
                                <p class="text-xl md:text-2xl font-medium text-slate-800 leading-[2.2]">${sectionData.quote}</p>
                                <span class="absolute -bottom-10 left-4 text-5xl text-slate-300 font-bold leading-none select-none pointer-events-none">"</span>
                            </div>
                        </div>

                        <div class="mb-10 px-2">
                            <h4 class="text-slate-500 font-bold text-sm md:text-base mb-3 uppercase tracking-wider flex items-center justify-center gap-2">
                                <span class="bg-slate-200 text-slate-600 px-2 py-1 rounded text-xs">💡</span> الخلاصة
                            </h4>
                            <p class="text-lg md:text-xl font-medium text-slate-700 leading-relaxed">${sectionData.summary}</p>
                        </div>

                        <div class="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 md:p-8 border border-amber-100 shadow-sm transform transition-transform md:hover:-translate-y-1">
                            <h4 class="text-amber-600 font-bold text-sm md:text-base mb-3 uppercase tracking-wider flex items-center justify-center gap-2">
                                <span class="bg-amber-100 text-amber-600 px-2 py-1 rounded text-xs">🤔</span> سؤال للتأمل
                            </h4>
                            <p class="text-lg md:text-xl font-medium text-slate-800 leading-relaxed">${sectionData.question}</p>
                        </div>
                    </div>
                </div>
                `;
    },

    renderStory(sectionData) {
        let html = `<div id="story-container-${sectionData.id}" class="w-full">`;
        html += this.renderStoryInner(sectionData);
        html += `</div>`;
        return html;
    },

    renderStoryInner(sectionData) {
        const sectionId = sectionData.id;
        const theme = sectionData.theme;
        const state = this.state.sectionData[sectionId];
        const slide = sectionData.slides[state.currentIndex];
        const isComplete = state.currentIndex >= sectionData.slides.length - 1;

        let html = '<div class="max-w-2xl mx-auto w-full flex flex-col items-center">';

        let progressHTML = '<div class="flex w-full gap-2 mb-6 px-4">';
        sectionData.slides.forEach((_, idx) => {
            const isActive = idx === state.currentIndex;
            const isPassed = idx < state.currentIndex;
            let bgClass = 'bg-slate-200';
            if (isActive) bgClass = `bg-${theme}-500`;
            else if (isPassed) bgClass = `bg-${theme}-300`;
            progressHTML += `<div class="h-2 md:h-3 rounded-full flex-grow transition-colors duration-300 ${bgClass}"></div>`;
        });
        progressHTML += '</div>';
        html += progressHTML;

        html += `
                <div class="bg-white border-2 border-${theme}-200 rounded-[2.5rem] p-8 md:p-12 shadow-lg w-full flex flex-col items-center text-center relative min-h-[450px] justify-center transform transition-all duration-500 overflow-hidden select-none" 
                     ontouchstart="App.handleSwipeStart(event)" 
                     ontouchend="App.handleSwipeEnd(event, '${sectionId}')">
                    
                    <!-- منطقة النقر لليسار (التالي) -->
                    <button ${isComplete ? 'disabled' : `onclick="App.handleStoryNav('${sectionId}', 1)"`} class="absolute top-0 left-0 w-24 md:w-32 h-full z-10 flex items-center justify-start opacity-0 hover:opacity-100 transition-opacity duration-300 outline-none ${isComplete ? 'cursor-default pointer-events-none' : 'cursor-pointer'}">
                        <div class="w-12 h-24 md:w-16 md:h-32 flex items-center justify-center rounded-r-2xl md:rounded-r-3xl bg-gradient-to-r from-slate-100 to-transparent text-${theme}-600 border-l-4 border-${theme}-400">
                            <svg class="w-8 h-8 md:w-10 md:h-10 drop-shadow ml-1 md:ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </div>
                    </button>

                    <!-- منطقة النقر لليمين (السابق) -->
                    <button ${state.currentIndex === 0 ? 'disabled' : `onclick="App.handleStoryNav('${sectionId}', -1)"`} class="absolute top-0 right-0 w-24 md:w-32 h-full z-10 flex items-center justify-end opacity-0 hover:opacity-100 transition-opacity duration-300 outline-none ${state.currentIndex === 0 ? 'cursor-default pointer-events-none' : 'cursor-pointer'}">
                        <div class="w-12 h-24 md:w-16 md:h-32 flex items-center justify-center rounded-l-2xl md:rounded-l-3xl bg-gradient-to-l from-slate-100 to-transparent text-slate-500 border-r-4 border-slate-300">
                            <svg class="w-8 h-8 md:w-10 md:h-10 drop-shadow mr-1 md:mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </div>
                    </button>

                    <div class="text-7xl md:text-8xl mb-8 drop-shadow-md transition-transform hover:scale-110 z-0 fade-in pointer-events-none" key="${state.currentIndex}">${slide.icon}</div>
                    <h3 class="text-3xl md:text-4xl font-bold text-${theme}-800 mb-6 z-0 fade-in px-6 md:px-12 pointer-events-none">${slide.title}</h3>
                    <p class="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed z-0 fade-in px-6 md:px-16 pointer-events-none">${slide.text}</p>
                    
                    <div class="absolute bottom-5 w-full flex justify-center items-center opacity-40 md:hidden pointer-events-none z-0 text-slate-400 gap-3 text-sm font-semibold">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        <span>اسحب للتنقل</span>
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                </div>`;

        html += `<div class="mt-8 pt-4 w-full flex justify-center fade-in"><button onclick="App.handleNextSection()" class="bg-${theme}-600 md:hover:bg-${theme}-700 text-white font-semibold text-xl md:text-2xl py-4 px-10 rounded-full shadow-lg flex items-center gap-3 active:scale-95 transition-all">القسم التالي ${ICONS.arrowLeft}</button></div>`;

        html += '</div>';
        return html;
    },


    updateStoryPartial(sectionId) {
        const sectionDef = APP_DATA.sections.find(s => s.id === sectionId);
        const container = document.getElementById(`story-container-${sectionId}`);
        if (container) {
            container.innerHTML = this.renderStoryInner(sectionDef);
        }
    },

    handleStoryNav(sectionId, dir) {
        const state = this.state.sectionData[sectionId];
        const sectionData = APP_DATA.sections.find(s => s.id === sectionId);
        const newIndex = state.currentIndex + dir;

        if (newIndex >= 0 && newIndex < sectionData.slides.length) {
            state.currentIndex = newIndex;
            if (newIndex > this.state.progress[sectionId].answered - 1) {
                this.state.progress[sectionId].answered = newIndex + 1;
            }
            if (this.state.progress[sectionId].answered === sectionData.slides.length) {
                this.checkFinalEvaluation();
            }

            this.updateStoryPartial(sectionId);
            this.updateTabs();
            this.scrollToActiveCard(sectionId);
        }
    },

    touchStartX: 0,
    touchEndX: 0,

    handleSwipeStart(e) {
        this.touchStartX = e.changedTouches[0].screenX;
    },

    handleSwipeEnd(e, sectionId) {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipeGesture(sectionId);
    },

    handleSwipeGesture(sectionId) {
        const threshold = 50;
        const state = this.state.sectionData[sectionId];
        if (!state) return;

        const sectionData = APP_DATA.sections.find(s => s.id === sectionId);
        const isComplete = state.currentIndex >= sectionData.slides.length - 1;
        const isFirst = state.currentIndex === 0;

        if (this.touchEndX < this.touchStartX - threshold) {
            if (!isComplete) this.handleStoryNav(sectionId, 1);
        } else if (this.touchEndX > this.touchStartX + threshold) {
            if (!isFirst) this.handleStoryNav(sectionId, -1);
        }
    },

    renderSectionFooterControls(sectionId, isComplete) {
        const sectionData = APP_DATA.sections.find(s => s.id === sectionId); const isLast = sectionId === APP_DATA.sections[APP_DATA.sections.length - 1].id;
        // إخفاء أزرار الإعادة والتالي في قسم الرسالة الذهبية لأن له واجهة خاصة
        if (sectionData.type === 'golden_envelope') return '';
        return `<div class="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 mx-auto w-full"><button onclick="App.handleResetSection('${sectionId}')" class="w-full md:w-auto px-8 py-3 md:py-4 rounded-full font-semibold text-xl md:text-2xl text-slate-600 bg-slate-100 md:hover:bg-slate-200 active:scale-95 transition-transform flex items-center justify-center gap-3">${ICONS.refresh} إعادة المحاولة</button>${!isLast ? `<button onclick="App.handleNextSection()" class="w-full md:w-auto px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-xl md:text-2xl text-white shadow-md transition-transform flex items-center justify-center gap-3 active:scale-95 bg-${sectionData.theme}-600 md:hover:bg-${sectionData.theme}-700">القسم التالي ${ICONS.arrowLeft}</button>` : ''}</div>`;
    },

    // --- دوال التحديث الجزئي للبطاقات (Partial Updates) الأخرى ---
    updateErrorCardPartial(sectionId, qIndex) {
        const qState = this.state.sectionData[sectionId][qIndex];
        const { originalQuestion: q, step, selectedWordIndex, selectedOption, answerAnimate, shakeWordIndex } = qState;
        const isStep3 = step === 3;
        const isSelectedCorrect = selectedOption && selectedOption.isCorrect;
        const theme = APP_DATA.sections.find(s => s.id === sectionId).theme;

        // تحديث الكلمات
        let wordsHTML = '';
        q.words.forEach((word, wIdx) => {
            const isSelected = selectedWordIndex === wIdx; const isShaking = shakeWordIndex === wIdx;
            let wordClass = "px-4 md:px-6 py-3 md:py-4 text-2xl md:text-3xl font-bold rounded-xl transition-all duration-300 select-none border-2 ";
            let displayText = word;
            if (step === 1) {
                wordClass += `bg-white border-slate-200 text-slate-700 md:hover:border-${theme}-300 md:hover:bg-${theme}-50 md:hover:-translate-y-1 md:hover:shadow-md active:scale-95 cursor-pointer `;
                if (isShaking) wordClass += "bg-orange-100 border-orange-400 text-orange-700 shake ";
            } else {
                if (isSelected) {
                    if (isStep3) {
                        displayText = selectedOption.text;
                        if (isSelectedCorrect) {
                            wordClass += "bg-emerald-500 text-white border-emerald-600 ";
                        } else {
                            wordClass += "bg-rose-500 text-white border-rose-600 ";
                        }
                    } else {
                        wordClass += "bg-rose-500 text-white border-rose-600 ";
                    }
                } else {
                    wordClass += "bg-white border-slate-200 text-slate-700 cursor-default ";
                }
            }
            wordsHTML += `<button ${step !== 1 ? 'disabled' : ''} onclick="App.handleErrorWordClick('${sectionId}', ${qIndex}, ${wIdx})" class="${wordClass}">${displayText}</button>`;
        });
        const wordsArea = document.getElementById(`words-area-${sectionId}-${qIndex}`);
        if (wordsArea) wordsArea.innerHTML = wordsHTML;

        // تحديث الخيارات
        let optionsHTML = '';
        if (step >= 2) {
            optionsHTML += `<div class="${qState.optionsAnimate ? 'smooth-expand' : ''}"><div class="mt-8 mb-4 text-center font-bold text-xl text-slate-600">اختر التصويب الصحيح:</div><div class="grid gap-3 grid-cols-1 md:grid-cols-3 w-full">`;
            qState.options.forEach((opt, optIdx) => {
                let btnClass = `p-4 rounded-xl border-2 transition-all font-semibold text-xl md:text-2xl flex items-center justify-center gap-2 `;
                if (step === 2) { btnClass += `border-slate-200 bg-white text-slate-600 md:hover:bg-slate-50 active:scale-95 cursor-pointer`; }
                else {
                    if (opt.isCorrect) btnClass += "bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm";
                    else if (selectedOption === opt) btnClass += "bg-rose-50 border-rose-500 text-rose-800 shadow-sm";
                    else btnClass += "bg-slate-50 border-slate-100 text-slate-400 opacity-50";
                    btnClass += " cursor-default";
                }
                optionsHTML += `<button ${step === 3 ? 'disabled' : ''} onclick="App.handleErrorOptionClick('${sectionId}', ${qIndex}, ${optIdx})" class="${btnClass}">${opt.text}${step === 3 && opt.isCorrect ? ICONS.checkCircle : ''}${step === 3 && selectedOption === opt && !opt.isCorrect ? ICONS.xCircle : ''}</button>`;
            });
            optionsHTML += `</div></div>`;
        }
        const optionsArea = document.getElementById(`options-area-${sectionId}-${qIndex}`);
        if (optionsArea) optionsArea.innerHTML = optionsHTML;

        // تحديث التغذية الراجعة
        const feedbackArea = document.getElementById(`feedback-area-${sectionId}-${qIndex}`);
        if (feedbackArea) {
            if (isStep3) {
                feedbackArea.className = `block w-full ${answerAnimate ? 'smooth-expand' : ''}`;
                feedbackArea.innerHTML = AppHelpers.getFeedbackBoxHTML(isSelectedCorrect, q.explanation);
            } else {
                feedbackArea.className = 'hidden';
            }
        }

        // تحديث إطار البطاقة الرئيسي
        const mainCard = document.getElementById(`${sectionId}-q-${qIndex}`);
        if (mainCard) {
            if (isStep3) {
                mainCard.classList.add('ring-2');
                if (isSelectedCorrect) { mainCard.classList.add('ring-emerald-400'); mainCard.classList.remove('ring-orange-400'); }
                else { mainCard.classList.add('ring-orange-400'); mainCard.classList.remove('ring-emerald-400'); }
            } else {
                mainCard.classList.remove('ring-2', 'ring-emerald-400', 'ring-orange-400');
            }
        }
    },

    updateSpottingCardPartial(sectionId, qIndex, theme) {
        const qState = this.state.sectionData[sectionId][qIndex];
        const q = qState.originalQuestion;
        const { answered, selectedWordIndex, answerAnimate, shakeWordIndex } = qState;
        const isTarget = wIdx => q.targetIndices ? q.targetIndices.includes(wIdx) : q.targetIndex === wIdx;

        // تحديث الكلمات
        let wordsHTML = '';
        q.words.forEach((word, wIdx) => {
            const isSelectedCorrect = answered && isTarget(wIdx);
            const isShaking = shakeWordIndex === wIdx;
            let wordClass = "px-4 md:px-6 py-3 md:py-4 text-2xl md:text-3xl font-bold rounded-xl transition-all duration-300 select-none ";
            if (!answered) {
                wordClass += `bg-white border-2 border-slate-200 text-slate-700 md:hover:border-${theme}-300 md:hover:bg-${theme}-50 md:hover:-translate-y-1 md:hover:shadow-md active:scale-95 cursor-pointer `;
                if (isShaking) wordClass += "bg-orange-100 border-orange-400 text-orange-700 shake ";
            } else {
                if (isSelectedCorrect) wordClass += `bg-emerald-500 text-white border-2 border-emerald-600 shadow-md cursor-default `;
                else wordClass += "bg-white border-2 border-slate-200 text-slate-700 cursor-default ";
            }
            wordsHTML += `<button ${answered ? 'disabled' : ''} onclick="App.handleSpottingWordClick('${sectionId}', ${qIndex}, ${wIdx})" class="${wordClass}">${word}</button>`;
        });
        const wordsArea = document.getElementById(`words-area-${sectionId}-${qIndex}`);
        if (wordsArea) wordsArea.innerHTML = wordsHTML;

        // تحديث التغذية الراجعة
        const feedbackArea = document.getElementById(`feedback-area-${sectionId}-${qIndex}`);
        if (feedbackArea) {
            if (answered) {
                feedbackArea.className = `block w-full ${answerAnimate ? 'smooth-expand' : ''}`;
                feedbackArea.innerHTML = AppHelpers.getFeedbackBoxHTML(true, q.explanation, 'أحسنت الاختيار');
            } else {
                feedbackArea.className = 'hidden';
            }
        }

        // تحديث إطار البطاقة الرئيسي
        const mainCard = document.getElementById(`${sectionId}-q-${qIndex}`);
        if (mainCard) {
            if (answered) mainCard.classList.add('ring-2', 'ring-emerald-400');
            else mainCard.classList.remove('ring-2', 'ring-emerald-400');
        }
    },

    updateHotspotCardPartial(sectionId, qIndex, theme) {
        const qState = this.state.sectionData[sectionId][qIndex];
        const { originalQuestion: q, answered, selectedTargets, answerAnimate, shakeWordId } = qState;

        let textHTML = '';
        q.paragraph.forEach((segment) => {
            const isSelected = selectedTargets.includes(segment.id);
            const isShaking = shakeWordId === segment.id;

            let segClass = "inline leading-loose px-1.5 py-0.5 rounded transition-all duration-300 text-2xl md:text-3xl select-none ";

            if (!answered) {
                segClass += `cursor-pointer border-b-2 border-transparent md:hover:bg-${theme}-100 md:hover:border-${theme}-300 `;
                if (isSelected) segClass += "bg-emerald-200 text-emerald-800 font-bold border-emerald-400 ";
                else if (isShaking) segClass += "bg-rose-200 text-rose-800 font-bold border-rose-400 shake ";
                else segClass += "text-slate-800 font-medium ";
            } else {
                if (isSelected) segClass += "bg-emerald-200 text-emerald-800 font-bold border-b-2 border-emerald-400 cursor-default ";
                else if (segment.isTarget && !isSelected) segClass += "bg-emerald-100 text-emerald-700 border-b-2 border-emerald-300 cursor-default ";
                else segClass += "text-slate-600 font-medium cursor-default ";
            }

            textHTML += `<span ${answered || isSelected ? '' : `onclick="App.handleHotspotClick('${sectionId}', ${qIndex}, '${segment.id}')"`} class="${segClass}">${segment.text}</span>`;
        });

        const textArea = document.getElementById(`hotspot-text-area-${sectionId}-${qIndex}`);
        if (textArea) textArea.innerHTML = textHTML;

        const progressCount = `${toArabicNum(selectedTargets.length)} / ${toArabicNum(q.requiredCount)}`;
        const headerCounter = document.querySelector(`#${sectionId}-q-${qIndex} .tracking-wider`);
        if (headerCounter) headerCounter.innerText = `المستخرج: ${progressCount}`;

        const feedbackArea = document.getElementById(`feedback-area-${sectionId}-${qIndex}`);
        if (feedbackArea) {
            if (answered) {
                feedbackArea.className = `block w-full ${answerAnimate ? 'smooth-expand' : ''}`;
                feedbackArea.innerHTML = AppHelpers.getFeedbackBoxHTML(true, q.explanation, 'أحسنت الاستخراج!');
            } else {
                feedbackArea.className = 'hidden';
            }
        }

        const mainCard = document.getElementById(`${sectionId}-q-${qIndex}`);
        if (mainCard) {
            if (answered) mainCard.classList.add('ring-2', 'ring-emerald-400');
            else mainCard.classList.remove('ring-2', 'ring-emerald-400');
        }
    },

    updateStandardCardPartial(sectionId, qIndex, theme) {
        const qState = this.state.sectionData[sectionId][qIndex];
        const { originalQuestion: q, options, answered, selectedOption, answerAnimate } = qState;
        const isSelectedCorrect = selectedOption && selectedOption.isCorrect;

        // تحديث الخيارات
        let optionsHTML = '';
        options.forEach((opt, optIdx) => {
            let btnClass = `w-full p-4 md:p-5 rounded-xl border-2 transition-all font-semibold text-xl md:text-2xl flex items-center gap-3 justify-start `;
            if (!answered) { btnClass += `border-slate-200 bg-white text-slate-600 active:scale-95 md:hover:bg-slate-50 cursor-pointer`; } else {
                if (opt.isCorrect) btnClass += "bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm";
                else if (selectedOption === opt) btnClass += "bg-rose-50 border-rose-500 text-rose-800 shadow-sm";
                else btnClass += "bg-slate-50 border-slate-100 text-slate-400 opacity-60";
                btnClass += " cursor-default";
            }
            let numClass = `w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-xl md:text-2xl font-bold shrink-0 transition-all `;
            if (answered) numClass += opt.isCorrect ? 'bg-emerald-500 text-white shadow-sm' : (selectedOption === opt ? 'bg-rose-500 text-white shadow-sm' : 'bg-slate-100 text-slate-400 border border-slate-200');
            else numClass += `bg-white text-${theme}-600 shadow-md border border-slate-100`;
            let numberingHTML = `<div class="${numClass}">${toArabicNum(optIdx + 1)}</div>`;
            optionsHTML += `<button ${answered ? 'disabled' : ''} onclick="App.handleAnswer('${sectionId}', ${qIndex}, ${optIdx})" class="${btnClass}">${numberingHTML}<span class="relative z-10 flex-grow text-right">${opt.text}</span>${answered && opt.isCorrect ? ICONS.checkCircle : ''}${answered && selectedOption === opt && !opt.isCorrect ? ICONS.xCircle : ''}</button>`;
        });
        const optionsArea = document.getElementById(`options-area-${sectionId}-${qIndex}`);
        if (optionsArea) optionsArea.innerHTML = optionsHTML;

        // تحديث التغذية الراجعة
        const feedbackArea = document.getElementById(`feedback-area-${sectionId}-${qIndex}`);
        if (feedbackArea) {
            if (answered) {
                feedbackArea.className = `block w-full ${answerAnimate ? 'smooth-expand' : ''}`;
                feedbackArea.innerHTML = AppHelpers.getFeedbackBoxHTML(isSelectedCorrect, q.explanation);
            } else {
                feedbackArea.className = 'hidden';
            }
        }

        // تحديث إطار البطاقة الرئيسي
        const mainCard = document.getElementById(`${sectionId}-q-${qIndex}`);
        if (mainCard) {
            if (answered) {
                mainCard.classList.add('ring-2');
                if (isSelectedCorrect) { mainCard.classList.add('ring-emerald-400'); mainCard.classList.remove('ring-rose-400'); }
                else { mainCard.classList.add('ring-rose-400'); mainCard.classList.remove('ring-emerald-400'); }
            }
        }
    },

    // --- دوال التحكم المحدثة الخالية من DOM Redraws الشاملة ---
    toggleHint(sectionId, idx) {
        const sectionDef = APP_DATA.sections.find(s => s.id === sectionId);
        if (sectionDef.id === 'intro') return;

        let qState;
        if (sectionDef.type === 'classify' || sectionDef.type === 'sort') {
            qState = this.state.sectionData[sectionId].questions[idx];
        } else if (sectionDef.type === 'flashcards' || sectionDef.type === 'matching') {
            qState = this.state.sectionData[sectionId];
        } else {
            qState = this.state.sectionData[sectionId][idx];
        }

        qState.showHint = !qState.showHint;
        qState.hintAnimate = qState.showHint;

        if (sectionDef.type === 'flashcards') {
            this.updateFlashcardsPartial(sectionId);
        } else if (sectionDef.type === 'matching') {
            this.updateMatchingPartial(sectionId);
        } else {
            const hintArea = document.getElementById(`hint-area-${sectionId}-${idx}`);
            if (hintArea) {
                if (qState.showHint) {
                    hintArea.classList.remove('hidden');
                    hintArea.classList.add('block', 'w-full');
                    if (qState.hintAnimate) hintArea.classList.add('smooth-expand');

                    // الحفاظ على الهامش السفلي في قسم التصنيف لتناسق التصميم
                    if (sectionDef.type === 'classify') {
                        hintArea.classList.add('mb-4');
                    }
                } else {
                    hintArea.classList.add('hidden');
                    hintArea.classList.remove('block', 'w-full', 'smooth-expand', 'mb-4');
                }
            }
        }
    },

    handleAnswer(sectionId, qIndex, optIndex) {
        const qState = this.state.sectionData[sectionId][qIndex]; if (qState.answered) return;
        const selectedOption = qState.options[optIndex]; qState.answered = true; qState.selectedOption = selectedOption;
        qState.answerAnimate = true;
        this.recordProgress(sectionId, selectedOption.isCorrect);
        const progress = this.state.progress[sectionId];
        const sectionDef = APP_DATA.sections.find(s => s.id === sectionId);

        this.updateStandardCardPartial(sectionId, qIndex, sectionDef.theme);
        this.updateTabs();

        if (progress.answered === progress.total) {
            this.showSectionResult(sectionId, sectionDef, progress);
        }
        this.checkFinalEvaluation();
    },

    handleErrorWordClick(sectionId, qIndex, wIndex) {
        const qState = this.state.sectionData[sectionId][qIndex]; if (qState.step !== 1) return;
        const isCorrectError = wIndex === (qState.originalQuestion.errorWordIndex ?? qState.originalQuestion.targetIndex);
        if (isCorrectError) {
            qState.selectedWordIndex = wIndex;
            qState.step = 2;
            qState.optionsAnimate = true;
            qState.shakeWordIndex = null;
            if (qState.showHint) qState.hintAnimate = false;
        } else {
            qState.shakeWordIndex = wIndex;
            setTimeout(() => { if (this.state.sectionData[sectionId][qIndex]) { this.state.sectionData[sectionId][qIndex].shakeWordIndex = null; this.updateErrorCardPartial(sectionId, qIndex); } }, 500);
        }
        this.updateErrorCardPartial(sectionId, qIndex);
    },

    handleErrorOptionClick(sectionId, qIndex, optIndex) {
        const qState = this.state.sectionData[sectionId][qIndex]; if (qState.step !== 2) return;
        const selectedOption = qState.options[optIndex]; qState.step = 3; qState.selectedOption = selectedOption;
        qState.answerAnimate = true;
        qState.optionsAnimate = false;
        this.recordProgress(sectionId, selectedOption.isCorrect);
        const progress = this.state.progress[sectionId];
        const sectionDef = APP_DATA.sections.find(s => s.id === sectionId);

        this.updateErrorCardPartial(sectionId, qIndex);
        this.updateTabs();

        if (progress.answered === progress.total) {
            this.showSectionResult(sectionId, sectionDef, progress);
        }
        this.checkFinalEvaluation();
    },

    handleSpottingWordClick(sectionId, qIndex, wIndex) {
        const qState = this.state.sectionData[sectionId][qIndex];
        if (qState.answered) return;
        const isCorrect = qState.originalQuestion.targetIndices
            ? qState.originalQuestion.targetIndices.includes(wIndex)
            : wIndex === qState.originalQuestion.targetIndex;

        if (isCorrect) {
            qState.answered = true;
            qState.selectedWordIndex = wIndex;
            qState.answerAnimate = true;
            this.recordProgress(sectionId, true);
            const sectionDef = APP_DATA.sections.find(s => s.id === sectionId);
            const progress = this.state.progress[sectionId];

            this.updateSpottingCardPartial(sectionId, qIndex, sectionDef.theme);
            this.updateTabs();

            if (progress.answered === progress.total) {
                this.showSectionResult(sectionId, sectionDef, progress);
            }
            this.checkFinalEvaluation();
        } else {
            qState.shakeWordIndex = wIndex;
            const sectionDef = APP_DATA.sections.find(s => s.id === sectionId);
            this.updateSpottingCardPartial(sectionId, qIndex, sectionDef.theme);
            setTimeout(() => { if (this.state.sectionData[sectionId][qIndex]) { this.state.sectionData[sectionId][qIndex].shakeWordIndex = null; this.updateSpottingCardPartial(sectionId, qIndex, sectionDef.theme); } }, 500);
        }
    },

    handleHotspotClick(sectionId, qIndex, wordId) {
        const qState = this.state.sectionData[sectionId][qIndex];
        if (qState.answered) return;

        const segment = qState.originalQuestion.paragraph.find(s => s.id === wordId);
        if (!segment) return;

        const sectionDef = APP_DATA.sections.find(s => s.id === sectionId);

        if (segment.isTarget && !qState.selectedTargets.includes(wordId)) {
            qState.selectedTargets.push(wordId);
            if (qState.selectedTargets.length >= qState.originalQuestion.requiredCount) {
                qState.answered = true;
                qState.answerAnimate = true;
                this.recordProgress(sectionId, true);
                const progress = this.state.progress[sectionId];
                this.updateHotspotCardPartial(sectionId, qIndex, sectionDef.theme);
                this.updateTabs();

                if (progress.answered === progress.total) {
                    this.showSectionResult(sectionId, sectionDef, progress);
                }
                this.checkFinalEvaluation();
            } else {
                this.updateHotspotCardPartial(sectionId, qIndex, sectionDef.theme);
            }
        } else if (!segment.isTarget) {
            qState.shakeWordId = wordId;
            this.updateHotspotCardPartial(sectionId, qIndex, sectionDef.theme);
            setTimeout(() => {
                if (this.state.sectionData[sectionId][qIndex]) {
                    this.state.sectionData[sectionId][qIndex].shakeWordId = null;
                    this.updateHotspotCardPartial(sectionId, qIndex, sectionDef.theme);
                }
            }, 500);
        }
    },

    handleMatchingClick(sectionId, side, itemId) {
        const state = this.state.sectionData[sectionId];
        if (state.wrongAttempt) return;

        if (side === 'right') {
            state.selectedRight = state.selectedRight === itemId ? null : itemId;
        } else {
            state.selectedLeft = state.selectedLeft === itemId ? null : itemId;
        }

        if (state.selectedRight && state.selectedLeft) {
            if (state.selectedRight === state.selectedLeft) {
                const matchedId = state.selectedRight;
                state.matchedPairs.push(matchedId);
                state.selectedRight = null;
                state.selectedLeft = null;
                this.state.progress[sectionId].answered++;
                this.state.progress[sectionId].score++;

                const rIdx = state.rightItems.findIndex(i => i.id === matchedId);
                const lIdx = state.leftItems.findIndex(i => i.id === matchedId);
                if (rIdx > -1 && lIdx > -1) {
                    const rItem = state.rightItems.splice(rIdx, 1)[0];
                    const lItem = state.leftItems.splice(lIdx, 1)[0];
                    state.rightItems.push(rItem);
                    state.leftItems.push(lItem);
                }

                this.updateMatchingPartial(sectionId);
                this.updateTabs();

                if (this.state.progress[sectionId].answered === this.state.progress[sectionId].total) {
                    const sectionDef = APP_DATA.sections.find(s => s.id === sectionId);
                    this.showSectionResult(sectionId, sectionDef, this.state.progress[sectionId]);
                    this.checkFinalEvaluation();
                }
            } else {
                state.wrongAttempt = true;
                this.updateMatchingPartial(sectionId);
                setTimeout(() => {
                    state.selectedRight = null;
                    state.selectedLeft = null;
                    state.wrongAttempt = false;
                    this.updateMatchingPartial(sectionId);
                }, 600);
            }
        } else {
            this.updateMatchingPartial(sectionId);
        }
    },

    handleDynamicSortClick(sectionId, optIndex) {
        const state = this.state.sectionData[sectionId];
        if (state.status === 'correct' || state.animatingOut) return;

        const currentQState = state.questions[state.currentIndex];
        const isCorrect = currentQState.options[optIndex].isCorrect;

        if (isCorrect) {
            const isFirstAttempt = state.status === 'idle';
            this.state.progress[sectionId].answered++;
            if (isFirstAttempt) { this.state.progress[sectionId].score++; }

            state.status = 'correct';
            state.animatingOut = true;
            this.updateSortPartial(sectionId);

            setTimeout(() => {
                state.currentIndex++;
                state.status = 'idle';
                state.animatingOut = false;
                this.updateSortPartial(sectionId);
                this.updateTabs();

                if (state.currentIndex >= state.questions.length) {
                    this.checkFinalEvaluation();
                }
            }, 400);
        } else {
            state.status = 'incorrect';
            this.updateSortPartial(sectionId);
        }
    },

    handleFlashcardFlip(sectionId) {
        const state = this.state.sectionData[sectionId];
        if (state.animatingOut) return;
        state.isFlipped = !state.isFlipped;
        const cardInner = document.getElementById(`flashcard-inner-${sectionId}`);
        if (cardInner) {
            if (state.isFlipped) cardInner.classList.add('rotate-y-180');
            else cardInner.classList.remove('rotate-y-180');
        }
    },

    handleFlashcardAnswer(sectionId, isCorrect) {
        const state = this.state.sectionData[sectionId];
        if (state.animatingOut) return;

        this.state.progress[sectionId].answered++;
        if (isCorrect) this.state.progress[sectionId].score++;

        state.animatingOut = true;
        this.updateFlashcardsPartial(sectionId);

        setTimeout(() => {
            state.currentIndex++;
            state.isFlipped = false;
            state.animatingOut = false;
            state.showHint = false;
            state.hintAnimate = false;

            this.updateFlashcardsPartial(sectionId);
            this.updateTabs();

            if (state.currentIndex >= state.cards.length) {
                this.checkFinalEvaluation();
            }
        }, 400);
    },

    handleClassifyClick(sectionId, categoryId) {
        const state = this.state.sectionData[sectionId];
        if (state.status === 'correct' || state.animatingOut) return;

        const currentQState = state.questions[state.currentIndex];
        const currentQ = currentQState.originalQuestion;
        const isCorrect = categoryId === currentQ.categoryId;

        if (isCorrect) {
            const isFirstAttempt = state.status === 'idle';
            this.state.progress[sectionId].answered++;
            if (isFirstAttempt) this.state.progress[sectionId].score++;

            state.status = 'correct';
            state.animatingOut = true;
            this.updateClassifyPartial(sectionId);

            setTimeout(() => {
                state.placedItems[categoryId].push(currentQ);
                state.currentIndex++;
                state.status = 'idle';
                state.animatingOut = false;

                this.updateClassifyPartial(sectionId);
                this.updateTabs();

                if (state.currentIndex >= state.questions.length) {
                    this.checkFinalEvaluation();
                }
            }, 400);
        } else {
            state.status = 'incorrect';
            this.updateClassifyPartial(sectionId);
        }
    },

    recordProgress(sectionId, isCorrect) { this.state.progress[sectionId].answered++; if (isCorrect) this.state.progress[sectionId].score++; },
    scrollToContent() {
        requestAnimationFrame(() => {
            setTimeout(() => {
                const target = document.getElementById('scroll-target');
                if (target) {
                    const stickyTabs = document.getElementById('sticky-tabs-container');
                    const headerOffset = stickyTabs ? stickyTabs.offsetHeight : 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }, 30);
        });
    },
    scrollToActiveCard(sectionId) {
        requestAnimationFrame(() => {
            setTimeout(() => {
                const containers = [
                    `story-container-${sectionId}`,
                    `style-lab-container-${sectionId}`,
                    `toolbelt-container-${sectionId}`,
                    `${sectionId}-flashcards-container`,
                    `${sectionId}-classify-container`,
                    `${sectionId}-sort-container`
                ];
                let target = null;
                for (let id of containers) {
                    target = document.getElementById(id);
                    if (target) break;
                }

                if (!target) target = document.getElementById(`section-${sectionId}`);

                if (target) {
                    const stickyTabs = document.getElementById('sticky-tabs-container');
                    const headerOffset = stickyTabs ? stickyTabs.offsetHeight : 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }, 30);
        });
    },
    scrollTabIntoView(tabId) {
        requestAnimationFrame(() => {
            setTimeout(() => {
                const tabBtn = document.getElementById(`tab-${tabId}`);
                const container = document.getElementById('tabs-container');
                if (tabBtn && container) {
                    const containerRect = container.getBoundingClientRect();
                    const btnRect = tabBtn.getBoundingClientRect();
                    if (tabId === APP_DATA.sections[0].id) {
                        container.scrollBy({ left: (btnRect.right - containerRect.right) + 16, behavior: 'smooth' });
                    } else {
                        container.scrollBy({ left: (btnRect.left + btnRect.width / 2) - (containerRect.left + containerRect.width / 2), behavior: 'smooth' });
                    }
                }
            }, 30);
        });
    },
    handleTabChange(tabId) { this.state.activeTab = tabId; this.updateUI(); this.scrollToContent(); this.scrollTabIntoView(tabId); },
    handleNextSection() { const currentIndex = APP_DATA.sections.findIndex(s => s.id === this.state.activeTab); if (currentIndex < APP_DATA.sections.length - 1) this.handleTabChange(APP_DATA.sections[currentIndex + 1].id); },
    handleResetSection(sectionId) {
        const secDef = APP_DATA.sections.find(s => s.id === sectionId);

        // 1. إعادة تعيين التقدم (للأقسام التفاعلية التي تحوي درجات فقط لحماية الأقسام الشارحة)
        if (!['intro', 'story', 'golden_envelope', 'style_lab', 'radar', 'contrast_cards', 'toolbelt'].includes(secDef.type)) {
            this.state.progress[sectionId].answered = 0;
            this.state.progress[sectionId].score = 0;
        } else if (secDef.type === 'story') {
            this.state.progress[sectionId].answered = 1;
            this.state.progress[sectionId].score = secDef.slides.length;
        } else {
            this.state.progress[sectionId].answered = 1;
            this.state.progress[sectionId].score = 1;
        }

        // 2. إعادة تعيين بيانات القسم (State) بناءً على النوع بدقة
        if (secDef.type === 'mcq') { this.state.sectionData[sectionId] = secDef.questions.map(q => ({ originalQuestion: q, options: shuffleArray(q.options.map((opt, oIdx) => ({ text: opt, isCorrect: oIdx === q.correct }))), answered: false, selectedOption: null, showHint: false, hintAnimate: false, answerAnimate: false })); }
        else if (secDef.type === 'classify') { let placedItems = {}; secDef.categories.forEach(c => placedItems[c.id] = []); this.state.sectionData[sectionId] = { questions: shuffleArray(secDef.questions).map(q => ({ originalQuestion: q, showHint: false, hintAnimate: false })), currentIndex: 0, status: 'idle', placedItems: placedItems, animatingOut: false }; }
        else if (secDef.type === 'error_correction') {
            this.state.sectionData[sectionId] = secDef.questions.map(q => ({
                originalQuestion: q,
                options: shuffleArray(q.options.map((opt, oIdx) => ({ text: opt, isCorrect: oIdx === q.correctOptionIndex }))),
                step: 1,
                selectedWordIndex: null,
                selectedOption: null,
                showHint: false,
                hintAnimate: false,
                optionsAnimate: false,
                answerAnimate: false,
                shakeWordIndex: null
            }));
        }
        else if (secDef.type === 'flashcards') { this.state.sectionData[sectionId] = { cards: secDef.cards, currentIndex: 0, isFlipped: false, animatingOut: false, showHint: false, hintAnimate: false }; }
        else if (secDef.type === 'sort') { this.state.sectionData[sectionId] = { questions: secDef.questions.map(q => ({ originalQuestion: q, options: q.options.map((opt, i) => ({ text: opt, isCorrect: i === q.correct })), showHint: false, hintAnimate: false })), currentIndex: 0, status: 'idle', animatingOut: false }; }
        else if (secDef.type === 'spotting') { this.state.sectionData[sectionId] = secDef.questions.map(q => ({ originalQuestion: q, answered: false, selectedWordIndex: null, showHint: false, hintAnimate: false, answerAnimate: false, shakeWordIndex: null })); }
        else if (secDef.type === 'golden_envelope') { this.state.sectionData[sectionId] = { status: 'opened' }; }
        else if (secDef.type === 'story') { this.state.sectionData[sectionId] = { currentIndex: 0 }; }
        else if (secDef.type === 'hotspot') { this.state.sectionData[sectionId] = secDef.questions.map(q => ({ originalQuestion: q, selectedTargets: [], answered: false, showHint: false, hintAnimate: false, answerAnimate: false, shakeWordId: null })); }
        else if (secDef.type === 'matching') { this.state.sectionData[sectionId] = { rightItems: shuffleArray(secDef.pairs.map(p => ({ id: p.id, text: p.right }))), leftItems: shuffleArray(secDef.pairs.map(p => ({ id: p.id, text: p.left }))), selectedRight: null, selectedLeft: null, matchedPairs: [], wrongAttempt: false }; }
        else if (secDef.type === 'style_lab' || secDef.type === 'toolbelt') { this.state.sectionData[sectionId] = { currentIdx: 0, selectedId: null }; }
        else if (secDef.type === 'intro' || secDef.type === 'contrast_cards') { this.state.sectionData[sectionId] = { activeIndex: 0 }; }
        else if (secDef.type === 'radar') { this.state.sectionData[sectionId] = { activeBranch: null }; }

        this.updateUI();
        this.scrollToContent();
    },
    renderTapToFill(sectionData) {
        const sectionId = sectionData.id;
        const progress = this.state.progress[sectionId];
        const isComplete = progress.total > 0 && progress.answered === progress.total;
        const questions = this.state.sectionData[sectionId];
        let html = '<div class="fade-in">';
        if (sectionData.description) { html += `<div class="text-center mb-8"><p class="text-lg md:text-xl text-${sectionData.theme}-800 font-semibold bg-${sectionData.theme}-50 bg-opacity-60 p-4 md:p-5 rounded-2xl shadow-sm inline-block w-full">${sectionData.description}</p></div>`; }
        questions.forEach((qState, idx) => { html += `<div id="${sectionId}-wrapper-${idx}">${this.renderTapToFillCard(qState, idx, sectionId, sectionData.theme, sectionData.type)}</div>`; });

        html += `<div id="section-result-area-${sectionId}">`;
        if (isComplete) { html += AppHelpers.getResultBoxHTML(sectionData.title, sectionData.theme, progress.score, progress.total, 'mt-12'); }
        html += '</div></div>';
        html += `<div id="section-footer-area-${sectionId}" class="w-full">`;
        html += this.renderSectionFooterControls(sectionId, isComplete);
        html += `</div>`;
        return html;
    },

    renderTapToFillCard(qState, idx, sectionId, theme) {
        const { originalQuestion: q, options, answered, selectedOption, showHint, hintAnimate, answerAnimate } = qState;
        const isSelectedCorrect = selectedOption && selectedOption.isCorrect;
        const hintFadeClass = hintAnimate ? 'smooth-expand' : '';
        const answerFadeClass = answerAnimate ? 'smooth-expand' : '';
        let ringClass = answered ? (isSelectedCorrect ? 'ring-2 ring-emerald-400' : 'ring-2 ring-rose-400') : '';

        // Parse Question text and replace "........" (3 or more dots) with our blank span
        let textSegments = q.text.split(/\.{3,}/);

        // Calculate the maximum length among the options to reserve consistent space
        const maxOptLength = Math.max(...options.map(o => o.text.length));
        // Using 'ch' unit ensures width is proportional to text size, adding 4ch for padding leeway
        const blankStyle = `width: ${maxOptLength + 4}ch; min-width: 140px;`;

        // Use fixed h to guarantee no resize jumps, align-middle prevents baseline floating, removed translate entirely.
        const baseBlankClass = "inline-flex items-center justify-center align-middle h-[54px] md:h-[64px] px-2 font-bold mx-2 transition-colors duration-300 rounded-xl whitespace-nowrap box-border";

        let blankSpan = '';
        if (answered && selectedOption) {
            const bgColor = isSelectedCorrect ? 'bg-emerald-100 text-emerald-800 border-emerald-400' : 'bg-rose-100 text-rose-800 border-rose-400';
            blankSpan = `<span id="${sectionId}-blank-${idx}" style="${blankStyle}" class="${baseBlankClass} border-[3px] ${bgColor} shadow-sm"><span class="fade-in">${selectedOption.text}</span></span>`;
        } else {
            // Blank not filled yet. Including invisible text ensures the browser calculates identical font baseline to prevent vertical shifts.
            blankSpan = `<span id="${sectionId}-blank-${idx}" style="${blankStyle}" class="${baseBlankClass} border-[3px] border-dashed border-slate-300 bg-slate-50/50 relative z-0"><span class="opacity-0 select-none">${options[0].text}</span></span>`;
        }

        let parsedText = '';
        if (textSegments.length > 1) {
            parsedText = textSegments.join(blankSpan);
        } else {
            parsedText = q.text + blankSpan;
        }

        let optionsHTML = '';
        options.forEach((opt, optIdx) => {
            let btnClass = `flex-[1_1_25%] min-w-[120px] p-3 md:p-4 rounded-xl border-2 transition-all font-bold text-xl md:text-2xl text-center shadow-sm relative `;
            if (!answered) {
                btnClass += `border-slate-200 bg-white text-slate-700 active:scale-95 md:hover:border-${theme}-300 md:hover:bg-${theme}-50 cursor-pointer`;
            } else {
                if (opt.isCorrect) btnClass += "bg-emerald-50 border-emerald-500 text-emerald-800 opacity-100 shadow-md";
                else if (selectedOption === opt) btnClass += "bg-rose-50 border-rose-400 text-rose-600 grayscale opacity-70";
                else btnClass += "bg-slate-50 border-slate-100 text-slate-400 opacity-40 grayscale";
                btnClass += " cursor-default";
            }
            optionsHTML += `<button id="${sectionId}-opt-${idx}-${optIdx}" ${answered ? 'disabled' : ''} onclick="App.handleTapToFillAnswer('${sectionId}', ${idx}, ${optIdx})" class="${btnClass}"><span>${opt.text}</span></button>`;
        });

        return `
                <div id="${sectionId}-q-${idx}" class="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-slate-200 mb-8 relative transition-colors duration-300 flex flex-col justify-start ${ringClass}">
                    <div class="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-100 mb-8 w-full mx-auto text-center">
                        <div class="flex items-center justify-between mb-6">
                            <span class="text-${theme}-600 font-bold text-lg md:text-xl">السؤال ${toArabicNum(idx + 1)}</span>
                            <button onclick="App.toggleHint('${sectionId}', ${idx})" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-lg md:text-xl font-bold transition-all active:scale-95 text-amber-500 md:hover:bg-amber-50">💡 تلميح</button>
                        </div>
                        <h3 class="text-3xl md:text-4xl leading-[2.2] md:leading-[2.2] text-slate-800 font-semibold mb-2 mx-auto max-w-2xl px-2" style="font-family: 'Readex Pro', sans-serif;">${parsedText}</h3>
                        
                        <div id="hint-area-${sectionId}-${idx}" class="${showHint ? `block w-full ${hintFadeClass}` : 'hidden'} mt-5 max-w-2xl mx-auto">
                            ${AppHelpers.getHintBoxHTML(q.hint)}
                        </div>
                    </div>
                    
                    <div id="options-area-${sectionId}-${idx}" class="flex flex-row flex-wrap justify-center gap-4 mx-auto w-full max-w-3xl">
                        ${optionsHTML}
                    </div>
                    
                    <div id="feedback-area-${sectionId}-${idx}" class="${answered ? `block w-full ${answerFadeClass} max-w-2xl mx-auto` : 'hidden'} mt-6">
                        ${answered ? AppHelpers.getFeedbackBoxHTML(isSelectedCorrect, q.explanation, 'أحسنت الاختيار', 'إجابة خاطئة، لكن لا بأس!') : ''}
                    </div>
                </div>`;
    },

    handleTapToFillAnswer(sectionId, qIdx, optIdx) {
        const state = this.state.sectionData[sectionId];
        const qState = state[qIdx];
        if (qState.answered) return;

        qState.selectedOption = qState.options[optIdx];
        this.finalizeTapToFillAnswer(sectionId, qIdx);
    },

    finalizeTapToFillAnswer(sectionId, qIdx) {
        const state = this.state.sectionData[sectionId];
        const progress = this.state.progress[sectionId];
        const qState = state[qIdx];
        const sectionDef = APP_DATA.sections.find(s => s.id === sectionId);

        qState.answered = true;
        qState.answerAnimate = true;

        if (qState.selectedOption.isCorrect) progress.score += 1;
        progress.answered += 1;

        const isComplete = progress.answered === progress.total;

        const wrapper = document.getElementById(`${sectionId}-wrapper-${qIdx}`);
        if (wrapper) {
            wrapper.innerHTML = this.renderTapToFillCard(qState, qIdx, sectionId, sectionDef.theme);
        }

        if (isComplete) {
            this.showSectionResult(sectionId, sectionDef, progress);
            this.updateTabs();
            this.checkFinalEvaluation();
        }
    },

    handleGlobalRestart() { this.initSectionData(); if (APP_DATA.sections.length > 0) this.state.activeTab = APP_DATA.sections[0].id; this.updateUI(); this.scrollTabIntoView(this.state.activeTab); requestAnimationFrame(() => { const header = document.getElementById('main-header'); window.scrollTo({ top: header ? header.offsetHeight : 80, behavior: 'smooth' }); }); },

    checkFinalEvaluation(forceShow = false) {
        // استثناء الأقسام الشارحة (والتي لا تحوي تقييمًا) من حساب الدرجة النهائية
        const scorableSections = APP_DATA.sections.filter(s => !['intro', 'story', 'golden_envelope', 'style_lab', 'radar', 'contrast_cards', 'toolbelt'].includes(s.type));
        if (scorableSections.length === 0) return;

        const isAllComplete = scorableSections.every(s => { const p = this.state.progress[s.id]; return p && p.total > 0 && p.answered === p.total; });
        const container = document.getElementById('final-evaluation-container');
        const activeSecDef = APP_DATA.sections.find(s => s.id === this.state.activeTab);

        let canShow = isAllComplete && !['intro', 'story', 'style_lab', 'radar', 'contrast_cards', 'toolbelt'].includes(activeSecDef.type);

        if (canShow && activeSecDef.type === 'golden_envelope' && this.state.sectionData[activeSecDef.id].status !== 'opened') {
            canShow = false;
        }

        if (canShow || forceShow) {
            let totalScore = 0, totalQuestions = 0; scorableSections.forEach(s => { totalScore += this.state.progress[s.id].score; totalQuestions += this.state.progress[s.id].total; });
            const percentage = Math.round((totalScore / totalQuestions) * 100); let message = "", color = "";
            if (percentage < 60) {
                message = "تحتاج إلى مزيد من التدريب، لا تيأس وحاول مرة أخرى!";
                color = "text-orange-600";
            } else if (percentage < 85) {
                message = "أداء رائع! مستواك جيد جدًا.";
                color = "text-violet-600";
            } else {
                message = "أداء استثنائي! أنت بطل حقيقي وخبير في هذا الدرس.";
                color = "text-emerald-600";
            }

            const evalHTML = `<div id="final-eval-box" class="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-lg border-2 border-amber-200 text-center smooth-expand">${ICONS.medal}<h2 class="text-3xl md:text-4xl font-bold text-slate-700 mb-6">التقييم النهائي</h2><div class="text-6xl md:text-7xl font-bold mb-8 text-slate-700 flex items-center justify-center gap-4"><span class="${color}">${toArabicNum(totalScore)}</span><span class="text-slate-400 text-3xl md:text-4xl font-medium mt-2">من</span><span class="text-slate-500">${toArabicNum(totalQuestions)}</span></div><div class="inline-block bg-amber-100 text-amber-800 px-6 py-2 rounded-full font-semibold text-xl md:text-2xl mb-6">النسبة المئوية: ${toArabicNum(percentage)}%</div><p class="text-xl md:text-2xl font-semibold leading-relaxed ${color} mb-10">${message}</p><button onclick="App.handleGlobalRestart()" class="px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-xl md:text-2xl text-white bg-slate-700 md:hover:bg-slate-800 shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-3 mx-auto">${ICONS.refresh} ابدأ من جديد</button></div>`;

            if (forceShow) {
                const triggerContainer = document.getElementById('final-evaluation-trigger-container');
                if (triggerContainer) {
                    triggerContainer.innerHTML = evalHTML;
                    setTimeout(() => { triggerContainer.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
                }
            } else {
                container.innerHTML = evalHTML;
            }
        } else {
            if (!forceShow) container.innerHTML = '';
        }
    }
};
document.addEventListener('DOMContentLoaded', () => { try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; window.scrollTo(0, 0); } catch (e) { } App.init(); });
