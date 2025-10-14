<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>XML Sitemap - Zain Cura Medical Center</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style type="text/css">
        body {
            font-family: Arial, sans-serif;
            font-size: 14px;
            background-color: #f8f9fa;
            margin: 0;
            padding: 20px;
        }
        .header {
            background-color: #4a90a4;
            color: white;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 8px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .header p {
            margin: 5px 0 0 0;
            opacity: 0.9;
        }
        .intro {
            background-color: white;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 8px;
            border: 1px solid #e9ecef;
        }
        table {
            background-color: white;
            border-collapse: collapse;
            width: 100%;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        th {
            background-color: #4a90a4;
            color: white;
            padding: 12px;
            text-align: left;
            font-weight: bold;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #e9ecef;
        }
        tr:hover {
            background-color: #f8f9fa;
        }
        .url {
            color: #0066cc;
            text-decoration: none;
            word-break: break-all;
        }
        .url:hover {
            text-decoration: underline;
        }
        .priority {
            text-align: center;
            font-weight: bold;
        }
        .priority-high { color: #28a745; }
        .priority-medium { color: #ffc107; }
        .priority-low { color: #6c757d; }
        .changefreq {
            text-align: center;
            text-transform: capitalize;
        }
        .lastmod {
            text-align: center;
            font-size: 12px;
            color: #6c757d;
        }
        .stats {
            background-color: white;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 8px;
            border: 1px solid #e9ecef;
            text-align: center;
        }
        .stat-item {
            display: inline-block;
            margin: 0 20px;
        }
        .stat-number {
            font-size: 24px;
            font-weight: bold;
            color: #4a90a4;
        }
        .stat-label {
            display: block;
            font-size: 12px;
            color: #6c757d;
            text-transform: uppercase;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🏥 XML Sitemap - Zain Cura Medical Center</h1>
        <p>Complete listing of all pages available for search engine indexation</p>
    </div>

    <div class="intro">
        <p><strong>What is this?</strong> This XML sitemap contains all the important pages of our medical website to help search engines like Google discover and index our content.</p>
        <p><strong>For Search Engines:</strong> This sitemap follows the XML sitemap protocol and includes priority, change frequency, and last modification data.</p>
        <p><strong>For Visitors:</strong> You can browse all our medical services and pages using the links below.</p>
    </div>

    <div class="stats">
        <div class="stat-item">
            <span class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
            <span class="stat-label">Total Pages</span>
        </div>
        <div class="stat-item">
            <span class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority >= 0.7])"/></span>
            <span class="stat-label">High Priority</span>
        </div>
        <div class="stat-item">
            <span class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc, 'services') or contains(sitemap:loc, 'doctor') or contains(sitemap:loc, 'medical')])"/></span>
            <span class="stat-label">Medical Services</span>
        </div>
    </div>

    <table>
        <tr>
            <th style="width: 50%;">Page URL</th>
            <th style="width: 15%;">Priority</th>
            <th style="width: 15%;">Change Frequency</th>
            <th style="width: 20%;">Last Modified</th>
        </tr>
        <xsl:for-each select="sitemap:urlset/sitemap:url">
            <xsl:sort select="sitemap:priority" order="descending"/>
            <tr>
                <td>
                    <a href="{sitemap:loc}" class="url" target="_blank">
                        <xsl:value-of select="sitemap:loc"/>
                    </a>
                </td>
                <td class="priority">
                    <xsl:choose>
                        <xsl:when test="sitemap:priority >= 0.8">
                            <span class="priority-high"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:when test="sitemap:priority >= 0.5">
                            <span class="priority-medium"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:otherwise>
                            <span class="priority-low"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:otherwise>
                    </xsl:choose>
                </td>
                <td class="changefreq">
                    <xsl:value-of select="sitemap:changefreq"/>
                </td>
                <td class="lastmod">
                    <xsl:value-of select="substring(sitemap:lastmod,1,10)"/>
                </td>
            </tr>
        </xsl:for-each>
    </table>

    <div style="margin-top: 20px; text-align: center; color: #6c757d; font-size: 12px;">
        <p>Generated by Zain Cura Medical Center - Dubai's Premier Healthcare Provider</p>
        <p>📞 +971-45703423 | 📍 Al Ghurair Centre, Deira, Dubai | 🌐 www.zaincura.com</p>
    </div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
