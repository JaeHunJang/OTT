package ssafy.c205.ott.domain.lookbook.dto.requestdto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class LookbookSearchDto {

    private String[] tags;
    private String uid;
}
