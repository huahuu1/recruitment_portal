package com.myloo.recruitment.service;

import com.myloo.recruitment.common.Constant;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileService {
    public String uploadFile(String folder, MultipartFile file) {
        String destFolder = folder + "/" + UUID.randomUUID().toString() + file.getOriginalFilename();
        try {
            Path filepath = Paths.get(Constant.FILE_FOLDER + "/" + destFolder);

            try (OutputStream os = Files.newOutputStream(filepath)) {
                os.write(file.getBytes());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return destFolder;
    }
}
