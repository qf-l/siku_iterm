<?php

    class DB {
        public $ip = 'localhost';
        public $root = 'root';
        public $password = '';
        public $db = 'biao';
        public $port = '3306';
        public function fetch($sql, $type="bool") {
            $coon = new Mysqli($this->ip, $this->root, $this->password, $this->db, $this->port);
            $result = $coon -> query($sql);
            switch($type) {
                case "bool":
                    return $result;
                case "object":
                    return $result -> fetch_object();
                case "all":
                    $arr = array();
                    while($row =  $result -> fetch_object()) {
                        array_push($arr, $row);
                    }
                    return $arr;
            }
        }
    }


?>