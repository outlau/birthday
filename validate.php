<?php
    //header('Content-Type: text/plain');


    //echo file_get_contents('array.php');

    $get_data = json_decode($_POST['send']);//json_decode($_POST['pw']); // Don't forget the encoding
    

    $whereInArray = array_search($get_data->password,$passwords);
    echo $whereInArray;
    if($whereInArray != false){
        unset($passwords[$whereInArray]);
        $data['success'] = true;
        $data['next_url'] = "here";
    }else{
        $data['success'] = false;	
    }
    
    /*
    if($get_data->password == $passwords[$get_data->progress]){
        $data['success'] = true;
        $data['next_url'] = "here";
    }
    else {	
        $data['success'] = false;	
    }


    //echo json_encode($data);
    
    
?>