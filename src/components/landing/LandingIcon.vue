<script setup lang="ts">
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { HiChevronDoubleDown } from 'oh-vue-icons/icons/hi'
import {
  RiArrowDownSLine,
  RiArrowRightLine,
  RiCalendarCheckLine,
  RiCapsuleLine,
  RiCheckLine,
  RiCloseLine,
  RiDoubleQuotesL,
  RiErrorWarningLine,
  RiFileTextLine,
  RiInformationLine,
  RiListUnordered,
  RiMenuLine,
  RiPencilLine,
  RiPlayFill,
  RiRefreshLine,
  RiSearchLine,
  RiTimeLine,
  RiUserLine,
  RiWhatsappLine,
} from 'oh-vue-icons/icons/ri'
import type { IconName } from '../../data/landing'

addIcons(
  HiChevronDoubleDown,
  RiArrowDownSLine,
  RiArrowRightLine,
  RiCalendarCheckLine,
  RiCapsuleLine,
  RiCheckLine,
  RiCloseLine,
  RiDoubleQuotesL,
  RiErrorWarningLine,
  RiFileTextLine,
  RiInformationLine,
  RiListUnordered,
  RiMenuLine,
  RiPencilLine,
  RiPlayFill,
  RiRefreshLine,
  RiSearchLine,
  RiTimeLine,
  RiUserLine,
  RiWhatsappLine,
)

const props = withDefaults(
  defineProps<{
    name: IconName
    size?: number
    strokeWidth?: number
  }>(),
  {
    size: 20,
    strokeWidth: 2,
  },
)

const libraryIconNames: Record<IconName, string> = {
  search: RiSearchLine.name,
  user: RiUserLine.name,
  note: RiFileTextLine.name,
  documents: RiCalendarCheckLine.name,
  pill: RiCapsuleLine.name,
  list: RiListUnordered.name,
  refresh: RiRefreshLine.name,
  pen: RiPencilLine.name,
  check: RiCheckLine.name,
  'chevron-down': RiArrowDownSLine.name,
  'chevrons-down': HiChevronDoubleDown.name,
  'arrow-right': RiArrowRightLine.name,
  menu: RiMenuLine.name,
  close: RiCloseLine.name,
  whatsapp: RiWhatsappLine.name,
  quote: RiDoubleQuotesL.name,
  clock: RiTimeLine.name,
  alert: RiErrorWarningLine.name,
  info: RiInformationLine.name,
  play: RiPlayFill.name,
}
</script>

<template>
  <OhVueIcon
    :name="libraryIconNames[props.name]"
    :stroke-width="strokeWidth"
    :style="{ width: `${size}px`, height: `${size}px` }"
    class="shrink-0"
  />
</template>
