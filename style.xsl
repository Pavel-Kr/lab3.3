<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="university">
    <ul>
      <xsl:for-each select="/faculty_name">
        <li><xsl:value-of select="/faculty_name/faculty"></xsl:value-of></li>
      </xsl:for-each>
    </ul>
  </xsl:template>
</xsl:stylesheet>
