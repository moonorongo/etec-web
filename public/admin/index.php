<?php
session_start();

/* =========================================================
   CREDENCIALES DEL PANEL  (cambiá estos valores)
   ========================================================= */
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'EspacioTec2026!';

/* Archivo de datos: vive en public_html/data/ (fuera del build,
   para que los deploys no lo sobreescriban). */
$DATA_DIR  = __DIR__ . '/../data';
$DATA_FILE = $DATA_DIR . '/horario.json';

$defaults = [
    'dias'  => 'Sábados y Domingos',
    'desde' => '16:00',
    'hasta' => '19:00',
];

function load_horario($file, $defaults) {
    if (is_file($file)) {
        $j = json_decode(file_get_contents($file), true);
        if (is_array($j)) return array_merge($defaults, $j);
    }
    return $defaults;
}

$msg = '';
$error = '';

/* ==== LOGOUT ==== */
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: ' . strtok($_SERVER['REQUEST_URI'], '?'));
    exit;
}

/* ==== LOGIN ==== */
if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['action'] ?? '') === 'login') {
    if (hash_equals(ADMIN_USER, $_POST['user'] ?? '') && hash_equals(ADMIN_PASS, $_POST['pass'] ?? '')) {
        $_SESSION['auth'] = true;
    } else {
        $error = 'Usuario o contraseña incorrectos.';
    }
}

$auth = !empty($_SESSION['auth']);

/* ==== GUARDAR HORARIO ==== */
if ($auth && $_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['action'] ?? '') === 'save') {
    $dias  = trim($_POST['dias'] ?? '');
    $desde = trim($_POST['desde'] ?? '');
    $hasta = trim($_POST['hasta'] ?? '');

    if ($dias === '' || $desde === '' || $hasta === '') {
        $error = 'Completá todos los campos.';
    } else {
        if (!is_dir($DATA_DIR)) @mkdir($DATA_DIR, 0755, true);
        $data = ['dias' => $dias, 'desde' => $desde, 'hasta' => $hasta];
        $ok = @file_put_contents(
            $DATA_FILE,
            json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)
        );
        if ($ok !== false) {
            $msg = 'Horario actualizado. Ya se ve en la web.';
        } else {
            $error = 'No se pudo guardar. Revisá permisos de escritura en /data.';
        }
    }
}

$h = load_horario($DATA_FILE, $defaults);
function e($s) { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); }
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title>Panel · Espacio TEC</title>
    <style>
        :root {
            --bg: #f3f4f6;
            --card: #ffffff;
            --ink: #111827;
            --muted: #6b7280;
            --line: #e5e7eb;
            --accent: #db2777;
            --accent-ink: #ffffff;
            --ok-bg: #ecfdf5; --ok-ink: #065f46;
            --err-bg: #fef2f2; --err-ink: #991b1b;
        }
        * { box-sizing: border-box; }
        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background: var(--bg);
            color: var(--ink);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .card {
            background: var(--card);
            width: 100%;
            max-width: 460px;
            border-radius: 18px;
            box-shadow: 0 10px 40px rgba(17,24,39,0.10);
            padding: 32px;
        }
        .brand {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 24px;
        }
        .brand .logo {
            width: 40px; height: 40px;
            border-radius: 10px;
            background: var(--ink);
            color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-weight: 800; font-size: 18px;
        }
        .brand h1 { font-size: 18px; margin: 0; }
        .brand p { margin: 0; font-size: 13px; color: var(--muted); }
        label {
            display: block;
            font-size: 13px;
            font-weight: 600;
            margin: 16px 0 6px;
        }
        input[type=text], input[type=password], input[type=time] {
            width: 100%;
            padding: 12px 14px;
            font-size: 16px;
            border: 1px solid var(--line);
            border-radius: 10px;
            background: #fff;
            color: var(--ink);
        }
        input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(219,39,119,0.15); }
        .row { display: flex; gap: 12px; }
        .row > div { flex: 1; }
        button {
            width: 100%;
            margin-top: 22px;
            padding: 13px;
            font-size: 15px;
            font-weight: 700;
            color: var(--accent-ink);
            background: var(--accent);
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: filter .15s;
        }
        button:hover { filter: brightness(1.08); }
        .alert { padding: 12px 14px; border-radius: 10px; font-size: 14px; margin-bottom: 8px; }
        .alert.ok  { background: var(--ok-bg);  color: var(--ok-ink); }
        .alert.err { background: var(--err-bg); color: var(--err-ink); }
        .preview {
            margin-top: 22px;
            padding: 14px 16px;
            background: var(--bg);
            border-radius: 10px;
            font-size: 14px;
            color: var(--muted);
        }
        .preview strong { color: var(--ink); }
        .topbar {
            display: flex; justify-content: space-between; align-items: center;
            margin-bottom: 20px;
        }
        .logout { font-size: 13px; color: var(--muted); text-decoration: none; }
        .logout:hover { color: var(--accent); }
        @media (max-width: 420px) {
            .card { padding: 24px; }
            .row { flex-direction: column; gap: 0; }
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="brand">
            <div class="logo">ET</div>
            <div>
                <h1>Espacio TEC</h1>
                <p>Panel de configuración</p>
            </div>
        </div>

        <?php if ($msg): ?><div class="alert ok"><?= e($msg) ?></div><?php endif; ?>
        <?php if ($error): ?><div class="alert err"><?= e($error) ?></div><?php endif; ?>

        <?php if (!$auth): ?>
            <form method="post" autocomplete="off">
                <input type="hidden" name="action" value="login">
                <label for="user">Usuario</label>
                <input type="text" id="user" name="user" required autofocus>
                <label for="pass">Contraseña</label>
                <input type="password" id="pass" name="pass" required>
                <button type="submit">Ingresar</button>
            </form>
        <?php else: ?>
            <div class="topbar">
                <strong>Horario del museo</strong>
                <a class="logout" href="?logout=1">Salir</a>
            </div>
            <form method="post">
                <input type="hidden" name="action" value="save">
                <label for="dias">Días de apertura</label>
                <input type="text" id="dias" name="dias" value="<?= e($h['dias']) ?>" required>
                <div class="row">
                    <div>
                        <label for="desde">Desde</label>
                        <input type="time" id="desde" name="desde" value="<?= e($h['desde']) ?>" required>
                    </div>
                    <div>
                        <label for="hasta">Hasta</label>
                        <input type="time" id="hasta" name="hasta" value="<?= e($h['hasta']) ?>" required>
                    </div>
                </div>
                <button type="submit">Guardar horario</button>
            </form>
            <div class="preview">
                Se mostrará en la web como:<br>
                <strong><?= e($h['dias']) ?> de <?= e($h['desde']) ?> a <?= e($h['hasta']) ?>. Thompson 665, Bahía Blanca.</strong>
            </div>
        <?php endif; ?>
    </div>
</body>
</html>
