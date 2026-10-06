import React from 'react';

interface LogoProps {
  className?: string;
  height?: number | string;
  width?: number | string;
  showTagline?: boolean;
  isDark?: boolean;
}

/**
 * Isotipo Oficial RVTER (R Verde Vectorial Estilizada)
 */
export const RvterIsotype: React.FC<{ className?: string; size?: number | string }> = ({
  className = '',
  size = 28
}) => (
  /* Isotipo R eliminado formalmente de la marca. Usar solo Wordmark rvter */
  <RvterWordmark height={size} className={className} fill="#0F172A" />
);

/**
 * Wordmark Oficial Tipográfico 'RVTER'
 */
export const RvterWordmark: React.FC<{ className?: string; fill?: string; height?: number | string }> = ({
  className = '',
  fill = 'currentColor',
  height = 34
}) => (
  <svg
    viewBox="407.6 1137.9 989.6 188.6"
    preserveAspectRatio="xMidYMid meet"
    height={height}
    className={`inline-block ${className}`}
  >
    <path fill={fill} d="M 432.945 1155.39 C 465.614 1157.47 533.44 1149.94 559.999 1161.62 C 571.401 1166.64 581.092 1175.19 585.484 1187.09 C 590.906 1201.36 590.297 1217.21 583.796 1231.02 C 576.379 1247.14 565.47 1251.95 550.0 1252.0 L 592.551 1313.0 L 550.0 1313.0 L 508.0 1258.6 L 460.746 1258.6 C 461.633 1273.02 461.55 1299.38 460.42 1313.39 C 451.28 1313.19 441.53 1314.58 432.483 1313.46 C 431.168 1313.29 428.211 1313.03 427.474 1311.87 C 423.925 1306.28 424.035 1241.53 427.065 1234.69 C 428.218 1232.1 431.475 1231.33 434.055 1230.92 C 459.426 1226.9 524.434 1236.3 543.982 1227.41 C 548.585 1225.32 552.523 1221.7 554.018 1216.76 C 555.862 1210.65 554.448 1200.58 551.052 1195.21 C 548.34 1190.92 543.06 1188.83 538.332 1187.72 C 521.766 1183.85 474.133 1186.32 454.45 1186.67 C 447.103 1186.79 437.219 1187.99 430.163 1185.87 C 428.247 1185.29 426.885 1184.29 426 1182.48 C 423.566 1177.5 424.558 1163.86 426.187 1158.59 C 428.938 1155.61 428.252 1156.53 432.945 1155.39 z"/>
    <path fill={fill} d="M 616 1155 L 656 1155 L 703 1272 L 750 1155 L 790 1155 L 724 1313 L 682 1313 Z"/>
    <path fill={fill} d="M 819 1155 L 991 1155 L 991 1186.5 L 923 1186.5 L 923 1313 L 888 1313 L 888 1186.5 L 819 1186.5 Z"/>
    <path fill={fill} d="M 1020 1155 L 1183 1155 L 1183 1186.5 L 1055 1186.5 L 1055 1218.5 L 1161 1218.5 L 1161 1249.5 L 1055 1249.5 L 1055 1281.5 L 1183 1281.5 L 1183 1313 L 1020 1313 Z"/>
    <path fill={fill} d="M 1221.519 1155.39 C 1254.188 1157.47 1322.014 1149.94 1348.573 1161.62 C 1359.975 1166.64 1369.666 1175.19 1374.058 1187.09 C 1379.48 1201.36 1378.871 1217.21 1372.37 1231.02 C 1364.953 1247.14 1354.044 1251.95 1338.574 1252 L 1381.125 1313 L 1338.574 1313 L 1296.574 1258.6 L 1249.32 1258.6 C 1250.207 1273.02 1250.124 1299.38 1248.994 1313.39 C 1239.854 1313.19 1230.104 1314.58 1221.057 1313.46 C 1219.742 1313.29 1216.785 1313.03 1216.048 1311.87 C 1212.499 1306.28 1212.609 1241.53 1215.639 1234.69 C 1216.792 1232.1 1220.049 1231.33 1222.629 1230.92 C 1248 1226.9 1313.008 1236.3 1332.556 1227.41 C 1337.159 1225.32 1341.097 1221.7 1342.592 1216.76 C 1344.436 1210.65 1343.022 1200.58 1339.626 1195.21 C 1336.914 1190.92 1331.634 1188.83 1326.906 1187.72 C 1310.34 1183.85 1262.707 1186.32 1243.024 1186.67 C 1235.677 1186.79 1225.793 1187.99 1218.737 1185.87 C 1216.821 1185.29 1215.459 1184.29 1214.574 1182.48 C 1212.14 1177.5 1213.132 1163.86 1214.761 1158.59 C 1217.512 1155.61 1216.826 1156.53 1221.519 1155.39 z"/>
  </svg>
);

/**
 * Logotipo Completo Combinado (Isotipo + Wordmark + Opcional Eslogan)
 */
export const RvterLogo: React.FC<LogoProps> = ({
  className = '',
  height = 26,
  showTagline = false,
  isDark = false,
}) => {
  const wordmarkFill = isDark ? '#FFFFFF' : '#0F172A';

  return (
    <div className={`inline-flex flex-col items-start gap-1.5 ${className}`}>
      <RvterWordmark fill={wordmarkFill} height={height} />
      {showTagline && (
        <span className="text-[10px] tracking-wider font-semibold uppercase text-[#2DA933]">
          CARGAS PROTEGIDAS, PAGOS SEGUROS Y RUTAS LLENAS.
        </span>
      )}
    </div>
  );
};

/**
 * Reemplaza automáticamente la palabra 'RVTER' dentro de cualquier cadena por el SVG Wordmark oficial
 */
export const FormattedRvterText: React.FC<{ text: string; fill?: string; wordmarkHeight?: number; className?: string }> = ({
  text,
  fill = 'currentColor',
  wordmarkHeight = 15,
  className = ''
}) => {
  if (!text.includes('RVTER')) {
    return <span className={className}>{text}</span>;
  }

  const parts = text.split('RVTER');
  return (
    <span className={className}>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && (
            <RvterWordmark
              fill={fill}
              height={wordmarkHeight}
              className="inline-block align-baseline mx-1"
            />
          )}
        </React.Fragment>
      ))}
    </span>
  );
};

