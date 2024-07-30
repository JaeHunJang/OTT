package ssafy.c205.ott.domain.category.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ssafy.c205.ott.domain.category.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    public Category findByName(String name);
}
