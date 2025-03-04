package ssafy.c205.ott.domain.lookbook.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ssafy.c205.ott.domain.lookbook.entity.Tag;
import ssafy.c205.ott.domain.lookbook.repository.TagRepository;

@Slf4j
@Service
public class TagServiceImpl implements TagService {

    @Autowired
    private TagRepository tagRepository;

    @Override
    public void addTag(String tagName) {
        Tag tagEntity = tagRepository.findByName(tagName);
        if (tagEntity == null) {
            tagRepository.save(Tag.builder()
                .name(tagName)
                .count(1L)
                .build());
        } else {
            tagRepository.save(Tag.builder()
                .id(tagEntity.getId())
                .name(tagName)
                .count(tagEntity.getCount() + 1)
                .build());
        }
        log.info("{} 태그 생성됨", tagRepository.findByName(tagName));
    }

    @Override
    public Tag getTag(String tagName) {
        return tagRepository.findByName(tagName);
    }

    @Override
    public void deleteTag(String tagName) {
        Tag tagEntity = tagRepository.findByName(tagName);

        //태그를 찾지 못한 경우
        if (tagEntity == null) {
            log.error("{} 이름의 태그를 찾지 못했습니다", tagName);
            return;
        }

        //태그를 찾은 경우
        if (tagEntity.getCount() == 1) {
            tagRepository.delete(tagEntity);
        } else {
            tagRepository.save(Tag.builder()
                .id(tagEntity.getId())
                .name(tagName)
                .count(tagEntity.getCount() - 1)
                .build());
        }
    }
}
