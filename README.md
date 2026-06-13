:root {
            --bg:        #0d1117;
            --surface:   #161b22;
            --border:    #21262d;
            --accent:    #58a6ff;
            --accent2:   #3fb950;
            --text:      #e6edf3;
            --muted:     #8b949e;
            --tag-bg:    #1f3550;
        }

        body {
            background: var(--bg);
            color: var(--text);
            font-family: 'Inter', sans-serif;
            font-size: 15px;
            line-height: 1.65;
            min-height: 100vh;
        }

        /* ── HEADER ── */
        header {
            background: var(--surface);
            border-bottom: 1px solid var(--border);
            padding: 48px 0 40px;
        }
        .header-inner {
            max-width: 860px;
            margin: 0 auto;
            padding: 0 28px;
            display: flex;
            gap: 32px;
            align-items: flex-start;
        }
        .avatar {
            width: 88px;
            height: 88px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'JetBrains Mono', monospace;
            font-size: 26px;
            font-weight: 500;
            color: #fff;
            flex-shrink: 0;
            border: 2px solid var(--border);
        }
        .header-text h1 {
            font-size: 1.75rem;
            font-weight: 700;
            color: var(--text);
            letter-spacing: -0.3px;
        }
        .header-text .role {
            color: var(--accent);
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.82rem;
            margin-top: 4px;
            letter-spacing: 0.5px;
        }
        .header-text .location {
            color: var(--muted);
            font-size: 0.88rem;
            margin-top: 6px;
        }
        .contact-links {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 16px;
        }
        .contact-links a {
            color: var(--muted);
            text-decoration: none;
            font-size: 0.83rem;
            display: flex;
            align-items: center;
            gap: 5px;
            transition: color 0.15s;
        }
        .contact-links a:hover { color: var(--accent); }
        .contact-links a svg { flex-shrink: 0; }

        /* ── MAIN ── */
        main {
            max-width: 860px;
            margin: 0 auto;
            padding: 40px 28px 80px;
            display: grid;
            gap: 0;
        }

        /* ── SECTION ── */
        section { border-top: 1px solid var(--border); padding: 32px 0; }
        section:first-child { border-top: none; }

        .section-label {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.72rem;
            font-weight: 500;
            color: var(--accent2);
            letter-spacing: 1.5px;
            text-transform: uppercase;
            margin-bottom: 20px;
        }

        /* ── RESUMO ── */
        .resumo p {
            color: #c9d1d9;
            max-width: 680px;
            font-size: 0.95rem;
        }

        /* ── EXPERIÊNCIA ── */
        .job { margin-bottom: 28px; }
        .job:last-child { margin-bottom: 0; }
        .job-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 16px;
            flex-wrap: wrap;
            margin-bottom: 4px;
        }
        .job-title {
            font-weight: 600;
            font-size: 1rem;
            color: var(--text);
        }
        .job-period {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.78rem;
            color: var(--muted);
            white-space: nowrap;
            padding-top: 3px;
        }
        .job-company {
            font-size: 0.87rem;
            color: var(--accent);
            margin-bottom: 10px;
        }
        .job ul {
            padding-left: 18px;
            color: #c9d1d9;
        }
        .job ul li {
            font-size: 0.88rem;
            margin-bottom: 4px;
        }

        /* ── HABILIDADES ── */
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .tag {
            background: var(--tag-bg);
            color: var(--accent);
            border: 1px solid #2a4a6e;
            border-radius: 4px;
            padding: 4px 10px;
            font-size: 0.8rem;
            font-family: 'JetBrains Mono', monospace;
        }
        .tag.soft {
            background: #1a2e1a;
            color: var(--accent2);
            border-color: #2a4a2a;
        }

        /* ── FORMAÇÃO / CERTS ── */
        .edu-item, .cert-item {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 16px;
            flex-wrap: wrap;
            padding: 12px 0;
            border-bottom: 1px solid var(--border);
        }
        .edu-item:last-child, .cert-item:last-child { border-bottom: none; }
        .edu-name { font-weight: 500; font-size: 0.92rem; }
        .edu-sub { font-size: 0.83rem; color: var(--muted); margin-top: 2px; }
        .badge-concluido {
            font-size: 0.72rem;
            font-family: 'JetBrains Mono', monospace;
            background: #1a2e1a;
            color: var(--accent2);
            border: 1px solid #2a4a2a;
            border-radius: 20px;
            padding: 2px 9px;
            white-space: nowrap;
            align-self: flex-start;
        }

        /* ── IDIOMAS ── */
        .lang-row {
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
        }
        .lang-item { display: flex; flex-direction: column; gap: 4px; }
        .lang-name { font-size: 0.9rem; font-weight: 500; }
        .lang-level { font-size: 0.78rem; color: var(--muted); }

        /* ── FOOTER ── */
        footer {
            text-align: center;
            color: var(--muted);
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.73rem;
            padding: 24px 28px;
            border-top: 1px solid var(--border);
        }
        footer a { color: var(--accent); text-decoration: none; }

        /* ── RESPONSIVE ── */
        @media (max-width: 600px) {
            .header-inner { flex-direction: column; gap: 20px; }
            .avatar { width: 68px; height: 68px; font-size: 20px; }
            .header-text h1 { font-size: 1.4rem; }
        }
    </style>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jefferson Jonathan da Silva — Profissional de TI</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

</head>
<body>

<header>
    <div class="header-inner">
        <div class="avatar">JJS</div>
        <div class="header-text">
            <h1>Jefferson Jonathan da Silva</h1>
            <div class="role">👨🏽‍💻 Profissional de TI 👨🏽‍💻</div>
            <div class="location">🌎 Nova Iguaçu, Rio de Janeiro 🌎</div>
            <div class="contact-links">
                <a href="tel:+5521969477087">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                    (21) 96947-7087
                </a>
                <a href="mailto:jeffersonjonathandasilva@gmail.com">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    jeffersonjonathandasilva@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/jeffersonjonathandasilva" target="_blank">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    LinkedIn
                </a>
                <a href="https://github.com/Jefferson-Jonathan/Jefferson-Jonathan.github.io" target="_blank">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                    GitHub
                </a>
            </div>
        </div>
    </div>
</header>

<main>

    <!-- RESUMO -->
    <section class="resumo">
        <div class="section-label">Resumo</div>
        <p>Minha jornada em TI começou há 15 anos atrás no suporte técnico a serviço da OI Velox e foi lá que percebi que resolver problemas sob pressão é o que me move. Com o tempo, fui me especializando em hardware, software, redes, telecomunicações, monitoramento. Recentemente estou estudando linguagem HTML, CSS e Javascript, sempre focado em me manter atualizado e em excelência nos meus serviços, deixando meus clientes sempre satisfeitos.</p>
    </section>

    <!-- EXPERIÊNCIA -->
    <section>
        <div class="section-label">Experiência Profissional</div>

        <div class="job">
            <div class="job-header">
                <div class="job-title">Suporte Técnico Nível 2</div>
                <div class="job-period">jul 2023 — jan 2026</div>
            </div>
            <div class="job-company">Nosso Wi-Fi (SAT Telecom) · São João de Meriti, RJ</div>
            <ul>
                <li>Monitoramento noc e ftth via zabbix grafana</li>
                <li>Suporte ao técnico ftth e de infraestrutura</li>
                <li>Provisionamento e configurações internas em ont nokia e huawei via erp</li>
                <li>Gerenciamento de ont via nokia 5520 ams (access management system)</li>
                <li>Analise de conexão ftth da olt até o equipamento do cliente final</li>
                <li>Acesso remoto via putty, anydesk e teamviwer</li>
                <li>Configuração de voip via zeus, microsip e dentro da ont</li>
                <li>Apoio total ao usuário de informática</li>
            </ul>
        </div>

        <div class="job">
            <div class="job-header">
                <div class="job-title">Suporte Técnico Nível 1</div>
                <div class="job-period">fev 2021 — mar 2023</div>
            </div>
            <div class="job-company">RedeBr Telecom · Duque de Caxias, RJ</div>
            <ul>
                <li>Gerenciamento de onu fiberhome via anm2000</li>
                <li>Provisionamento e configurações internas em ont nokia via mk solution</li>
                <li>Treinamento de novos técnicos (suporte n1)</li>
                <li>Analise de rombpimento via putty para solução rápida</li>
                <li>Analise e solução em casos específicos de lentidão, latência alta e perda de pacote em jogos</li>
                <li>Configuração de vpns internas</li>
                <li>Atendimento a clientes b2b, júridica e pessoa física</li>
                <li>Atendimento via chat</li>
                <li>Atendimento telefônico via microsip</li>
                <li>Agendamento e tratativa de prioridades técnicas</li>
            </ul>
        </div>

        <div class="job">
            <div class="job-header">
                <div class="job-title">Técnico de Informática</div>
                <div class="job-period">nov 2019 — jul 2020</div>
            </div>
            <div class="job-company">Netcenter Segurança Cibernética · Rio de Janeiro, RJ</div>
            <ul>
                <li>Hardware - montagem/manutenção de computadores</li>
                <li>Instalação e manutenção de infraestrutura de redes cabeadas e wi-fi</li>
                <li>Software - instalação de programas e sistemas corporativos</li>
                <li>Instalação e configuração de impressoras</li>
                <li>Instalação e configuração de windows xp/vista/7/8/8.1/10</li>
                <li>Elaboração de relatórios técnicos seguindo todo procedimento executado ao problema previamente analisado</li>
            </ul>
        </div>
    </section>

    <!-- HABILIDADES -->
    <section>
        <div class="section-label">Habilidades Técnicas</div>
        <div class="tags" style="margin-bottom: 14px;">
            <span class="tag">Hardware e Software</span>
            <span class="tag">Suporte Técnico FTTH</span>
            <span class="tag">Redes TCP/IP, LAN e WAN</span>
            <span class="tag">Helpdesk</span>
            <span class="tag">ONU Fiberhome e TP-Link</span>
            <span class="tag">ONT Nokia e Huawei</span>
            <span class="tag">Sistema VoIP</span>
            <span class="tag">Suporte Presencial e Remoto</span>
            <span class="tag">Sistema Solidicon, MK Solution e ERP</span>
            <span class="tag">Sistema Operacional Windows e Linux</span>
            <span class="tag">Microsoft Office</span>
        </div>
    </section>

    <!-- FORMAÇÃO -->
    <section>
        <div class="section-label">Formação Acadêmica</div>
        <div class="edu-item">
            <div>
                <div class="edu-name">Escola Técnica Sandra Silva</div>
                <div class="edu-sub">Técnico em Eletrotécnica · Queimados, RJ · fev 2017 — mar 2018</div>
            </div>
            <span class="badge-concluido">✓ Concluído</span>
        </div>
    </section>

    <!-- CERTIFICADOS -->
    <section>
        <div class="section-label">Certificados</div>
        <div class="cert-item">
            <div>
                <div class="edu-name">Fundamentos de TI — Hardware e Software</div>
                <div class="edu-sub">2020</div>
            </div>
            <span class="badge-concluido">✓ Concluído</span>
        </div>
        <div class="cert-item">
            <div>
                <div class="edu-name">Introdução a Redes de Computadores</div>
                <div class="edu-sub">2020</div>
            </div>
            <span class="badge-concluido">✓ Concluído</span>
        </div>
        <div class="cert-item">
            <div>
                <div class="edu-name">Microsoft Excel 2016 — Básico</div>
                <div class="edu-sub">2024</div>
            </div>
            <span class="badge-concluido">✓ Concluído</span>
        </div>
        <div class="cert-item">
            <div>
                <div class="edu-name">Microsoft Word 2016 — Básico</div>
                <div class="edu-sub">2024</div>
            </div>
            <span class="badge-concluido">✓ Concluído</span>
        </div>
    </section>

    <!-- IDIOMAS -->
    <section>
        <div class="section-label">Idiomas</div>
        <div class="lang-row">
            <div class="lang-item">
                <div class="lang-name">Português</div>
                <div class="lang-level">Língua materna</div>
            </div>
            <div class="lang-item">
                <div class="lang-name">Inglês</div>
                <div class="lang-level">Básico</div>
            </div>
            <div class="lang-item">
                <div class="lang-name">Espanhol</div>
                <div class="lang-level">Básico</div>
            </div>
        </div>
    </section>

</main>

<footer>
    <a href="https://github.com/Jefferson-Jonathan/Jefferson-Jonathan.github.io" target="_blank">Jefferson-Jonathan.github.io</a>
    &nbsp;·&nbsp; Atualizado em 2026
</footer>

</body>
</html>

