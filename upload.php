<?php

require_once('check.php');

$type = array('jpg', 'jpeg', 'png', 'gif');
$path = sprintf('upload');
$upload = new App_Util_Upload('fileToUpload', 0, $type);
//获取上传信息
$info = $upload->getUploadFileInfo();
$fileName = time() . rand(1000, 9999) . '.' . $info['suffix'];
$fullName = $path . $fileName;	
$path = rtrim('upload', DIRECTORY_SEPARATOR) . '/' . $fullName;
$success = $upload->save($path);
$msg = $success ? '上传成功' : '上传失败';
echo json_encode(array('result' => $success, 'msg' => $msg, 'src' => $path));

?> 