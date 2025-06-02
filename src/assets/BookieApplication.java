package org.example.bookie;

import lombok.RequiredArgsConstructor;
import org.example.bookie.dao.RoleDao;
import org.example.bookie.dao.UserDao;
import org.example.bookie.security.Role;
import org.example.bookie.security.User;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

@SpringBootApplication
@RequiredArgsConstructor
public class BookieApplication {
    private final UserDao userDao;
    private final RoleDao roleDao;
    private final PasswordEncoder passwordEncoder;

    @Bean @Transactional @Profile("dev")
    public ApplicationRunner runner() {
        return r -> {
            Role userRole = new Role();
            userRole.setRoleName("ROLE_USER");

            Role adminRole = new Role();
            adminRole.setRoleName("ROLE_ADMIN");

            org.example.bookie.security.User user1 = new org.example.bookie.security.User();
            user1.setUsername("john");
            user1.setPassword(passwordEncoder.encode("12345"));

            org.example.bookie.security.User user2 = new User();
            user2.setUsername("mary");
            user2.setPassword(passwordEncoder.encode("12345"));

            user1.addRole(adminRole);
            user2.addRole(userRole);

            userDao.save(user1);
            userDao.save(user2);
        };
    }

    public static void main(String[] args) {
        SpringApplication.run(BookieApplication.class, args);
    }

}
